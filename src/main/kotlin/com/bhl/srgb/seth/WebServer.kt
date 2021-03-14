package com.bhl.srgb.seth

import com.bhl.srgb.seth.extension.hash
import com.bhl.srgb.seth.handler.HealthHandler
import com.bhl.srgb.seth.handler.PageHandler
import com.google.inject.Inject
import io.javalin.Javalin
import io.javalin.apibuilder.ApiBuilder.after
import io.javalin.apibuilder.ApiBuilder.before
import io.javalin.apibuilder.ApiBuilder.get
import io.javalin.apibuilder.ApiBuilder.path
import io.javalin.http.Context
import io.javalin.plugin.rendering.JavalinRenderer
import io.javalin.plugin.rendering.template.JavalinMustache
import org.eclipse.jetty.http.HttpStatus
import org.slf4j.LoggerFactory
import java.util.Date
import java.util.UUID

/**
 * Starts and runs Javalin web service
 */
class WebServer @Inject constructor(
    private val healthHandler: HealthHandler,
    private val pageHandler: PageHandler,
) {
    companion object {
        const val APP_NAMESPACE = ""
        const val DEFAULT_PORT = 8080
        const val DEFAULT_BYTES = 120000000L
    }

    private val log = LoggerFactory.getLogger(this.javaClass)

    private val listenPort = System.getenv("PORT")?.toInt() ?: DEFAULT_PORT
    private val corsAllowOrigin = ""
    private val maxBodySizeBytes = DEFAULT_BYTES

    /**
     * Configure and start Javalin
     */
    fun start(): Javalin {
        JavalinRenderer.register(JavalinMustache, ".html.tpl")

        val app = Javalin.create { config ->
            config.addSinglePageHandler("/", pageHandler)
            config.addStaticFiles("public")
            config.contextPath = APP_NAMESPACE
            config.enableCorsForOrigin(corsAllowOrigin)
            config.maxRequestSize = maxBodySizeBytes
            config.requestLogger { ctx, ms ->
                logRequest(ctx, ms)
            }
        }
        setRoutes(app)
        setExceptionHandlers(app)
        log.info("Using namespace: $APP_NAMESPACE")
        log.info("Using port: $listenPort")
        app.start(listenPort)
        return app
    }

    private fun setRoutes(app: Javalin) {
        app.routes {
            before { beforeAll() }
            after { ctx -> afterAll(ctx) }

            path("health") {
                get(healthHandler)
            }
        }
    }

    private fun beforeAll() {
        Driver.nonce = UUID.randomUUID().toString().hash()
    }

    private fun afterAll(ctx: Context) {
        ctx.header("Content-Security-Policy",
            "default-src 'self'; " +
                    "base-uri 'none'; " +
                    "connect-src 'self' https:; " +
                    "img-src 'self' data:; " +
                    "script-self 'self' 'nonce-${Driver.nonce}';"
        )
        ctx.header("X-Frame-Options", "SAMEORIGIN")
        ctx.header("X-Xss-Protection", "1; mode=block")
        ctx.header("X-Content-Type-Options", "nosniff")
        ctx.header("Referrer-Policy", "no-referrer-when-downgrade")
        ctx.header("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
        ctx.header("Feature-Policy",
            "geolocation 'self'; midi 'self'; sync-xhr 'self'; microphone 'self'; camera 'self'; " +
                    "magnetometer 'self'; gyroscope 'self'; fullscreen *; payment 'self';")
        ctx.header("Time", Date().time.toString())
    }

    private fun setExceptionHandlers(app: Javalin): Javalin {
        return app.exception(Exception::class.java) { e, ctx ->
            handleException(e, ctx, HttpStatus.INTERNAL_SERVER_ERROR_500, "Unknown exception occurred")
        }
    }

    private fun handleException(e: Exception, ctx: Context, statusCode: Int, message: String) {
        log.error(message, e)
        ctx.status(statusCode)
    }

    private fun logRequest(ctx: Context, ms: Float) {
        log.info("Req: ${ctx.method()} Res: ${ctx.status()} in $ms")
    }
}
