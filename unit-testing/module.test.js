import Utility from "util";
describe("Module Unit Test", () => {
    it("Module", async () => {
        const Import = await import("@cloud-technology/parameter");
        console.log("Module", Utility.inspect(Import, { colors: true }));
        expect(Import).toHaveProperty("Parameter");
    });
});
