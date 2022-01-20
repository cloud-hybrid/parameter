import Utility from "util";

import { Parameter } from "..";

describe( "Module Unit Test", () => {
    it("Module", async () => {
        const Import = await import("./../src/index");

        console.log("Module", Utility.inspect(Import, { colors: true }));

        expect(Import).toHaveProperty("Parameter");
    });

    it("Default Export", async () => {
        const Import = await import("./../src/index");

        console.log("Module", Utility.inspect(Import, { colors: true }));

        expect(Import).toHaveProperty("default");
    });
} );
