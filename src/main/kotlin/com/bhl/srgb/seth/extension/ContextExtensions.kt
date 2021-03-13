package com.bhl.srgb.seth.extension

import io.javalin.http.Context
import javax.servlet.http.Cookie

/**
 * Secures and sets the cookie in the Context
 */
fun Context.secureCookie(key: String, value: String) {
    val cookie = Cookie(key, value)
    cookie.isHttpOnly = true
    cookie.secure = true
    this.cookie(cookie)
    this.res.setHeader("Set-Cookie", "${this.res.getHeader("Set-Cookie")};SameSite=Strict")
}
