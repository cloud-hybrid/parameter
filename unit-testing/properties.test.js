"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = tslib_1.__importDefault(require("util"));
const parameter_1 = require("@iac-factory/parameter");
describe("Unit Test", () => {
    const parameter = new parameter_1.Parameter({
        organization: "organization",
        environment: "environment",
        application: "application",
        service: "service",
        identifier: "identifier"
    });
    console.log("Instance", util_1.default.inspect(parameter, { colors: true }));
    it("Organization", () => expect(parameter).toHaveProperty("organization"));
    it("Environment", () => expect(parameter).toHaveProperty("environment"));
    it("Application", () => expect(parameter).toHaveProperty("application"));
    it("Service", () => expect(parameter).toHaveProperty("service"));
    it("Identifier", () => expect(parameter).toHaveProperty("identifier"));
    it("Module", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        expect(Import).toHaveProperty("Parameter");
    });
});
