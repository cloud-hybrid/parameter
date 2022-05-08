"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parameter_1 = require("@iac-factory/parameter");
describe("String Unit Test", () => {
    const $ = parameter_1.Properties;
    it("Default", async () => {
        expect($.Base).toEqual(4);
    });
    it("Identifier", async () => {
        expect($.Extended).toEqual(5);
    });
});
