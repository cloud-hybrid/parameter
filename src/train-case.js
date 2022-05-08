"use strict";
/***
 * Takes any given prefix, a resource name, and generates a machine-readable, normalized string
 *
 * @param {string} input
 *
 * @returns {string}
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.Lowercase = exports.Case = void 0;
function Scream(input) {
    return input.split(" ").map(($) => {
        return $.toString()[0].toUpperCase() + $.toString().slice(1);
    }).join("-").split("_").map(($) => {
        return $.toString()[0].toUpperCase() + $.toString().slice(1);
    }).join("-").split("-").map(($) => {
        return $.toString()[0].toUpperCase() + $.toString().slice(1);
    }).join("-");
}
/***
 * String-Type-Casing
 * ---
 *
 * Similar to a Type-Cast, Cast the String into a Train-Case String.
 *
 * @param input {string}
 * @param options {string}
 *
 * @constructor
 *
 */
const Case = (input, options = { condense: true }) => {
    return input.trim()
        .replace(/_/g, "-")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\W/g, ($) => /[À-ž]/.test($) ? $ : "-")
        .replace(/^-+|-+$/g, "")
        .replace(/-{2,}/g, ($) => options && options.condense ? "-" : $)
        .toLowerCase();
};
exports.Case = Case;
/*** Lowercase Train-Case-Casted String */
const Lowercase = Case;
exports.Lowercase = Lowercase;
/*** Title (Screaming) Train-Case-Casted String */
const Title = (input) => Scream(input);
exports.Title = Title;
exports.default = Case;
