import { Parameter } from "./parameter"

export { Parameter };
export * from "./parameter";
export default await import("./parameter").then(
    ($) => {
        return $.Parameter;
    }
);
