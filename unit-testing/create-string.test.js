"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = tslib_1.__importDefault(require("util"));
describe("Unit Test (Extended)", () => {
    const input = "organization/environment/application/service/identifier";
    it("Generator", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("Instance", util_1.default.inspect(instance, { colors: true }));
        expect(instance).toBeTruthy();
    });
    it("Organization", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("Organization", util_1.default.inspect(instance, { colors: true }));
        expect(instance.organization).toEqual("organization");
    });
    it("Environment", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("Environment", util_1.default.inspect(instance, { colors: true }));
        expect(instance.environment).toEqual("environment");
    });
    it("Application", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("Application", util_1.default.inspect(instance, { colors: true }));
        expect(instance.application).toEqual("application");
    });
    it("Service", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("service", util_1.default.inspect(instance, { colors: true }));
        expect(instance.service).toEqual("service");
    });
    it("Identifier", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("Identifier", util_1.default.inspect(instance, { colors: true }));
        expect(instance.identifier).toEqual("identifier");
    });
    it("Properties", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("Properties", util_1.default.inspect(instance, { colors: true }));
        expect(instance.string().split("/").length).toEqual(5);
    });
});
describe("Unit Test (Base)", () => {
    const input = "organization/environment/service/identifier";
    it("Generator", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("Instance", util_1.default.inspect(instance, { colors: true }));
        expect(instance).toBeTruthy();
    });
    it("Organization", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("Organization", util_1.default.inspect(instance, { colors: true }));
        expect(instance.organization).toEqual("organization");
    });
    it("Environment", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("Environment", util_1.default.inspect(instance, { colors: true }));
        expect(instance.environment).toEqual("environment");
    });
    it("Service", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("service", util_1.default.inspect(instance, { colors: true }));
        expect(instance.service).toEqual("service");
    });
    it("Identifier", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("Application", util_1.default.inspect(instance, { colors: true }));
        expect(instance.identifier).toEqual("identifier");
    });
    it("Properties", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        const instance = Import.Parameter.initialize(input, true);
        console.log("Properties", util_1.default.inspect(instance, { colors: true }));
        expect(instance.string().split("/").length).toEqual(4);
    });
});
