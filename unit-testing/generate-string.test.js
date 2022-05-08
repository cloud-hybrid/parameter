"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = tslib_1.__importDefault(require("util"));
const parameter_1 = require("@iac-factory/parameter");
describe("Unit Test", () => {
    const input = "organization/environment/application/service/identifier";
    it("Generator", async () => {
        const instance = parameter_1.Parameter.initialize(input);
        console.log("Instance", util_1.default.inspect(instance, { colors: true }));
        expect(instance).toBeTruthy();
    });
    it("Organization", async () => {
        const instance = parameter_1.Parameter.initialize(input);
        console.log("Organization", util_1.default.inspect(instance, { colors: true }));
        expect(instance.organization).toEqual("organization");
    });
    it("Environment", async () => {
        const instance = parameter_1.Parameter.initialize(input);
        console.log("Environment", util_1.default.inspect(instance, { colors: true }));
        expect(instance.environment).toEqual("environment");
    });
    it("Application", async () => {
        const instance = parameter_1.Parameter.initialize(input);
        console.log("Application", util_1.default.inspect(instance, { colors: true }));
        expect(instance.application).toEqual("application");
    });
    it("Service", async () => {
        const instance = parameter_1.Parameter.initialize(input);
        console.log("service", util_1.default.inspect(instance, { colors: true }));
        expect(instance.service).toEqual("service");
    });
    it("Identifier", async () => {
        const instance = parameter_1.Parameter.initialize(input);
        console.log("Identifier", util_1.default.inspect(instance, { colors: true }));
        expect(instance.identifier).toEqual("identifier");
    });
    it("Properties", async () => {
        const instance = parameter_1.Parameter.initialize(input);
        console.log("Properties", util_1.default.inspect(instance, { colors: true }));
        expect(instance.string().split("/").length).toEqual(5);
    });
});
