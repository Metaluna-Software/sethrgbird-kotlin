package com.bhl.srgb.seth

import com.google.inject.Guice
import dev.misfitlabs.kotlinguice4.getInstance
import io.javalin.Javalin


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

        val injector = Guice.createInjector()
        // Start the web service
        app = injector
            .getInstance<WebServer>()
            .start()
    }
}
