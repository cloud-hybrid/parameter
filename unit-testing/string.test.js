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
    /*** Attributes */
    it("Attributes", async () => {
        expect(parameter).toHaveProperty("organization");
        expect(parameter).toHaveProperty("environment");
        expect(parameter).toHaveProperty("application");
        expect(parameter).toHaveProperty("service");
        expect(parameter).toHaveProperty("identifier");
    });
    it("Default", async () => {
        const $ = parameter.string();
        console.log("String" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Train-Case", async () => {
        const $ = parameter.string("Train-Case");
        console.log("Train-Case" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Screaming-Train-Case", async () => {
        const $ = parameter.string("Screaming-Train-Case");
        console.log("Screaming-Train-Case" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Directory", async () => {
        const $ = parameter.string("Directory");
        console.log("Directory" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Enumeration", async () => {
        const $ = parameter.enumerations();
        console.log("Directory" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toEqual(parameter_1.Properties.Extended);
    });
    const Default = new parameter_1.Parameter({
        organization: "organization",
        environment: "environment",
        service: "service",
        identifier: "identifier"
    });
    /*** Attributes */
    it("Attributes", async () => {
        expect(Default).toHaveProperty("organization");
        expect(Default).toHaveProperty("environment");
        expect(Default).toHaveProperty("service");
        expect(Default).toHaveProperty("identifier");
        expect(Default.application).toBeFalsy();
    });
    it("Default", async () => {
        const $ = Default.string();
        console.log("String" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Train-Case", async () => {
        const $ = Default.string("Train-Case");
        console.log("Train-Case" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Screaming-Train-Case", async () => {
        const $ = Default.string("Screaming-Train-Case");
        console.log("Screaming-Train-Case" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Directory", async () => {
        const $ = Default.string("Directory");
        console.log("Directory" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Enumeration", async () => {
        const $ = Default.enumerations();
        console.log("Directory" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toEqual(parameter_1.Properties.Base);
    });
    const Identifier = new parameter_1.Parameter({
        organization: "organization",
        environment: "environment",
        application: "application",
        service: "service",
        identifier: "identifier"
    });
    /*** Attributes */
    it("Attributes", async () => {
        expect(Identifier).toHaveProperty("organization");
        expect(Identifier).toHaveProperty("environment");
        expect(Identifier).toHaveProperty("application");
        expect(Identifier).toHaveProperty("service");
        expect(Identifier).toHaveProperty("identifier");
    });
    it("Default", async () => {
        const $ = Identifier.string();
        console.log("String" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Train-Case", async () => {
        const $ = Identifier.string("Train-Case");
        console.log("Train-Case" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Screaming-Train-Case", async () => {
        const $ = Identifier.string("Screaming-Train-Case");
        console.log("Screaming-Train-Case" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Directory", async () => {
        const $ = Identifier.string("Directory");
        console.log("Directory" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toBeTruthy();
    });
    it("Enumeration", async () => {
        const $ = Identifier.enumerations();
        console.log("Directory" + ":", util_1.default.inspect($, { colors: true }));
        expect($).toEqual(parameter_1.Properties.Extended);
    });
});
