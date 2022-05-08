"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = tslib_1.__importDefault(require("util"));
describe("Module Unit Test", () => {
    it("Module", async () => {
        const Import = await Promise.resolve().then(() => tslib_1.__importStar(require("@iac-factory/parameter")));
        console.log("Module", util_1.default.inspect(Import, { colors: true }));
        expect(Import).toHaveProperty("Parameter");
    });
});
