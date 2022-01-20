import Utility from "util";

import { Parameter } from "..";

describe( "Unit Test", () => {
    const parameter = new Parameter({
        organization: "organization",
        environment: "environment",
        application: "application",
        resource: "resource",
        provider: "provider",
        identifier: "identifier"
    });

    console.log("Instance", Utility.inspect(parameter, { colors: true }));

    it("environment", () => expect(parameter).toHaveProperty("environment"));
    it("application", () =>expect(parameter).toHaveProperty("application"));
    it("resource", () => expect(parameter).toHaveProperty("resource"));
    it("provider", () => expect(parameter).toHaveProperty("provider"));
    it("identifier", () => expect(parameter).toHaveProperty("identifier"));

    it("module", async () => {
        const Import = await import("./../src/index");

        expect(Import).toHaveProperty("Parameter");

    });
} );
