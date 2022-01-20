import Utility from "util";

import { Parameter } from "..";

describe( "Class Unit Test", () => {
    it("Class", async () => {
        const Import = await import("./../src/index");
        console.log("Class", Utility.inspect(Parameter, { colors: true }));
        expect(Import).toHaveProperty("Parameter");
    });
} );
