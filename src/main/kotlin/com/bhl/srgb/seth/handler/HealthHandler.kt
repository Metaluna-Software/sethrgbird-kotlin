package com.bhl.srgb.seth.handler

import io.javalin.http.Context
import io.javalin.http.Handler
import org.eclipse.jetty.http.HttpStatus

class HealthHandler : Handler {

    override fun handle(ctx: Context) {
        ctx.status(HttpStatus.OK_200)
    }
}
