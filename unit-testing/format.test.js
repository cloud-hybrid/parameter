"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = tslib_1.__importDefault(require("util"));
const parameter_1 = require("@iac-factory/parameter");
describe("String Unit Test", () => {
    const parameter = new parameter_1.Parameter({
        organization: "organization",
        environment: "environment",
        application: "application",
        service: "service",
        identifier: "identifier"
    });
    it("Truth", async () => {
        const $ = parameter.format();
        console.log("Format" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Organization", async () => {
        const $ = parameter.format();
        console.log("Format ($.organization)" + ":", util_1.default.inspect($.organization, { colors: true }));
        expect($.organization).toEqual("organization");
    });
    it("Environment", async () => {
        const $ = parameter.format();
        console.log("Format ($.environment)" + ":", util_1.default.inspect($.environment, { colors: true }));
        expect($.environment).toEqual("environment");
    });
    it("Application", async () => {
        const $ = parameter.format();
        console.log("Format ($.application)" + ":", util_1.default.inspect($.application, { colors: true }));
        expect($.application).toEqual("application");
    });
    it("Service", async () => {
        const $ = parameter.format();
        console.log("Format ($.service)" + ":", util_1.default.inspect($.service, { colors: true }));
        expect($.service).toEqual("service");
    });
    it("Identifier", async () => {
        const $ = parameter.format();
        console.log("Format ($.identifier)" + ":", util_1.default.inspect($.identifier, { colors: true }));
        expect($.identifier).toEqual("identifier");
    });
});
