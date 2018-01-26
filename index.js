module.exports = function (callback) {
    if (callback) {
        callback(localStorage)
    } else {
        return Promise.resolve(localStorage)
    }
}
