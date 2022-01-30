import Utility from "util";

import { Parameter } from "@cloud-technology/parameter";

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

    it("Environment", () => expect(parameter).toHaveProperty("environment"));
    it("Application", () =>expect(parameter).toHaveProperty("application"));
    it("Resource", () => expect(parameter).toHaveProperty("resource"));
    it("Provider", () => expect(parameter).toHaveProperty("provider"));
    it("Identifier", () => expect(parameter).toHaveProperty("identifier"));


    it("Module", async () => {
        const Import = await import("@cloud-technology/parameter");

        expect(Import).toHaveProperty("Parameter");

    });
} );
