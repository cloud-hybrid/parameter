import Utility from "util";

import { Parameter } from "@cloud-technology/parameter";

describe( "Module Unit Test", () => {
    it("Module", async () => {
        const Import = await import("@cloud-technology/parameter");

        console.log("Module", Utility.inspect(Import, { colors: true }));

        expect(Import).toHaveProperty("Parameter");
    });
} );
