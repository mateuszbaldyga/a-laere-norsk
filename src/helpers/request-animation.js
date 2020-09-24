export default function requestAnimation (callback) {
    var wait, args, context

    return function () {
        if (wait) return
        wait = true
        args = arguments
        context = this
        requestAnimationFrame(function () {
            wait = false
            callback.apply(context, args)
        })
    }
}
