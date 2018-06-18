/**
 * Add leading zeros to strings
 *
 * @license MIT
 * @author Vitor Oliveira <vitor83dev@gmail.com>
 * @version 1.0.0
 * @since 2018-06-18
 */
// Add a prototype to Javascript's String object to add Leading Zeroes with desired length
String.prototype.leadingZeroes = function (length) {
    var result = this.toString();
    length = Math.round(length);
    while (result.length < length) {
        result = '0' + result;
    }
    return result;
};
