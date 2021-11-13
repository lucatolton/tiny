module.exports = function tiny(string) {
    if (typeof string !== 'string') throw new TypeError('string required');
    return string.replace(/\s/g, "");
}