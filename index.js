module.exports = function (callback) {
    if (callback) {
        callback(null, localStorage, window)
    } else {
        return Promise.resolve({storage: localStorage, source: window})
    }
}
