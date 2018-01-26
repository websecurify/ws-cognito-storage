module.exports = function (callback) {
    if (callback) {
        callback(null, localStorage)
    } else {
        return Promise.resolve(localStorage)
    }
}
