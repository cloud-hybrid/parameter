import Utility from "util";

import { Parameter } from "@cloud-technology/parameter";

describe( "Unit Test", () => {
    const input = "organization/environment/application/resource/identifier";

    it("Generator", async () => {
        const instance = Parameter.instantiate(input);

        console.log("Instance", Utility.inspect(instance, { colors: true }));

        expect(instance).toBeTruthy();
    });

    it("Organization", async () => {
        const instance = Parameter.instantiate(input);

        console.log("Organization", Utility.inspect(instance, { colors: true }));

        expect(instance.organization).toEqual("organization");
    });

    it("Environment", async () => {
        const instance = Parameter.instantiate(input);

        console.log("Environment", Utility.inspect(instance, { colors: true }));

        expect(instance.environment).toEqual("environment");
    });

    it("Application", async () => {
        const instance = Parameter.instantiate(input);

        console.log("Application", Utility.inspect(instance, { colors: true }));

        expect(instance.application).toEqual("application");
    });

    it("Resource", async () => {
        const instance = Parameter.instantiate(input);

        console.log("Resource", Utility.inspect(instance, { colors: true }));

        expect(instance.resource).toEqual("resource");
    });

    it("Identifier", async () => {
        const instance = Parameter.instantiate(input);

        console.log("Identifier", Utility.inspect(instance, { colors: true }));

        expect(instance.identifier).toEqual("identifier");
    });

    it("Properties", async () => {
        const instance = Parameter.instantiate(input);

        console.log("Properties", Utility.inspect(instance, { colors: true }));

        expect(instance.properties).toEqual(5);
    });
} );
