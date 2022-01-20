/***
 * Secrets-Parameter
 *
 * @example
 * /// Node, CommonJS Usage
 * const Main = async () => {
 *     const Type = await import("@cloud-technology/parameter");
 *
 *     const instance = new Type.Parameter({
 *         organization: "IBM",
 *         environment: "Development",
 *         application: "Application",
 *         resource: "Secret-Token",
 *         provider: "SSM",
 *         identifier: "ID"
 *     });
 *
 *     console.log(instance);
 *     console.log(instance.string());
 *
 *     console.log(instance.string("Directory"));
 *     console.log(instance.string("Train-Case"));
 *     console.log(instance.string("Screaming-Train-Case"));
 *
 * }
 *
 * (async () => await Main())();
 *
 * @example
 * /// ECMA Usage
 * import { Parameter } from "@cloud-technology/parameter";
 *
 * const instance = new Parameter({
 *     organization: "IBM",
 *     environment: "Development",
 *     application: "Application",
 *     resource: "Secret-Token",
 *     provider: "SSM",
 *     identifier: "ID"
 * });
 *
 * console.log(instance);
 * console.log(instance.string());
 *
 * console.log(instance.string("Directory"));
 * console.log(instance.string("Train-Case"));
 * console.log(instance.string("Screaming-Train-Case"));
 *
 */

import { Parameter } from "./src/index.js";
import type { Options } from "./src/index.js";

export { Parameter };
export type { Options };

export default { Parameter };
