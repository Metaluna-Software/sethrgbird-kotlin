package com.bhl.srgb.seth

import kotlinx.browser.document

/**
 * Main driver class for application
 */
object Driver {

    /**
     * Main entry point
     */
    @JvmStatic
    fun main(args: Array<String> = arrayOf()) {
        document.bgColor = "blue"
        println("hello world")
    }
}
