package com.bhl.srgb.seth.handler

import com.bhl.srgb.seth.Driver
import com.bhl.srgb.seth.WebServer.Companion.APP_NAMESPACE
import com.bhl.srgb.seth.WebServer.Companion.APP_ROOT
import com.bhl.srgb.seth.extension.hash
import com.bhl.srgb.seth.extension.secureCookie
import com.github.mustachejava.MustacheNotFoundException
import io.javalin.http.Context
import io.javalin.http.Handler
import io.javalin.plugin.rendering.template.TemplateUtil
import org.slf4j.LoggerFactory
import java.util.Date
import java.util.UUID

/**
 * Serves static content pages
 */
class PageHandler : Handler {
    private val log = LoggerFactory.getLogger(this.javaClass)
    override fun handle(ctx: Context) {
        ctx.header("Cache-Control", "max-age=0")
        ctx.header("Content-Type", "text/html")
        val csrfToken = UUID.randomUUID().toString()
        val csrfTokenHashCookieName = "csrf-token-hash"
        val csrfTokenHeader = "Csrf-Token"
        ctx.header("Content-Type", "text/html")
        ctx.secureCookie(csrfTokenHashCookieName, csrfToken.hash())
        val path = if (ctx.path().endsWith(".html")) {
            ctx.path().removePrefix(APP_NAMESPACE)
        } else "/index.html"
        try {
            ctx.render(
                "public$path.tpl",
                TemplateUtil.model(
                    "appRoot", APP_ROOT,
                    "publicRoot", APP_NAMESPACE,
                    "config", "<script nonce='${Driver.nonce}'></script>",
                    "time", Date().time
                )
            )
        } catch (e: MustacheNotFoundException) {
            log.error("Mustache error", e)
        }
    }
}
