/***
 * Takes any given prefix, a resource name, and generates a machine-readable, normalized string
 *
 * @param {string} input
 *
 * @returns {string}
 *
 */
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
declare const Case: (input: string, options?: {
    condense: boolean;
} | null | undefined) => string;
/*** Lowercase Train-Case-Casted String */
declare const Lowercase: (input: string, options?: {
    condense: boolean;
} | null | undefined) => string;
/*** Title (Screaming) Train-Case-Casted String */
declare const Title: (input: string) => string;
export { Case, Lowercase, Title };
export default Case;
