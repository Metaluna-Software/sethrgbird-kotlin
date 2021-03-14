package com.bhl.srgb.seth

import com.google.inject.Guice
import dev.misfitlabs.kotlinguice4.getInstance
import io.javalin.Javalin
import org.slf4j.impl.SimpleLogger

/**
 * Main driver class for application
 */
object Driver {

    var nonce: String? = null
    private lateinit var app: Javalin

    /**
     * Main entry point
     */
    @JvmStatic
    fun main(args: Array<String> = arrayOf()) {

        System.setProperty(SimpleLogger.DEFAULT_LOG_LEVEL_KEY, "INFO")
        System.setProperty(SimpleLogger.SHOW_DATE_TIME_KEY, "true")
        System.setProperty(SimpleLogger.DATE_TIME_FORMAT_KEY, "yyyy-MM-dd HH:mm:ss:SSS Z")
        System.setProperty(SimpleLogger.LOG_FILE_KEY, "System.out")

        val injector = Guice.createInjector()
        // Start the web service
        app = injector
            .getInstance<WebServer>()
            .start()
    }
}
