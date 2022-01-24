import Utility from "util";

describe( "Unit Test", () => {
    const input = "organization/environment/application/resource/provider/identifier";

    it("Generator", async () => {
        const Import = await import("./../src");

        const instance = Import.Parameter.instantiate(input);

        console.log("Instance", Utility.inspect(instance, { colors: true }));

        expect(instance).toBeTruthy();
    });

    it("Organization", async () => {
        const Import = await import("./../src/index.js");

        const instance = Import.Parameter.instantiate(input);

        console.log("Organization", Utility.inspect(instance, { colors: true }));

        expect(instance.organization).toEqual("organization");
    });

    it("Environment", async () => {
        const Import = await import("./../src/index.js");

        const instance = Import.Parameter.instantiate(input);

        console.log("Environment", Utility.inspect(instance, { colors: true }));

        expect(instance.environment).toEqual("environment");
    });

    it("Application", async () => {
        const Import = await import("./../src/index.js");

        const instance = Import.Parameter.instantiate(input);

        console.log("Application", Utility.inspect(instance, { colors: true }));

        expect(instance.application).toEqual("application");
    });

    it("Resource", async () => {
        const Import = await import("./../src/index.js");

        const instance = Import.Parameter.instantiate(input);

        console.log("Resource", Utility.inspect(instance, { colors: true }));

        expect(instance.resource).toEqual("resource");
    });

    it("Provider", async () => {
        const Import = await import("./../src/index.js");

        const instance = Import.Parameter.instantiate(input);

        console.log("Provider", Utility.inspect(instance, { colors: true }));

        expect(instance.provider).toEqual("provider");
    });

    it("Identifier", async () => {
        const Import = await import("./../src/index.js");

        const instance = Import.Parameter.instantiate(input);

        console.log("Identifier", Utility.inspect(instance, { colors: true }));

        expect(instance.identifier).toEqual("identifier");
    });

    it("Properties", async () => {
        const Import = await import("./../src/index.js");

        const instance = Import.Parameter.instantiate(input);

        console.log("Properties", Utility.inspect(instance, { colors: true }));

        expect(instance.properties).toEqual(6);
    });
} );
