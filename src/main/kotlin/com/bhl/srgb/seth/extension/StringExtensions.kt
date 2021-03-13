package com.bhl.srgb.seth.extension

import java.security.MessageDigest

/**
 * Sets the hash for a nonce
 */
fun String.hash(): String {
    val bytes = this.toByteArray()
    val md = MessageDigest.getInstance("SHA-256")
    val digest = md.digest(bytes)
    return digest.fold("") { str, it -> str + "%02x".format(it) }
}
