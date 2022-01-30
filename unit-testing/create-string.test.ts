import Utility from "util";

describe( "Unit Test (Parameter)", () => {
    const input = "organization/environment/application/resource/identifier";

    it("Generator", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Parameter");

        console.log("Instance", Utility.inspect(instance, { colors: true }));

        expect(instance).toBeTruthy();
    });

    it("Organization", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Parameter");

        console.log("Organization", Utility.inspect(instance, { colors: true }));

        expect(instance.organization).toEqual("organization");
    });

    it("Environment", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Parameter");

        console.log("Environment", Utility.inspect(instance, { colors: true }));

        expect(instance.environment).toEqual("environment");
    });

    it("Application", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Parameter");

        console.log("Application", Utility.inspect(instance, { colors: true }));

        expect(instance.application).toEqual("application");
    });

    it("Resource", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Parameter");

        console.log("Resource", Utility.inspect(instance, { colors: true }));

        expect(instance.resource).toEqual("resource");
    });

    it("Identifier", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Parameter");

        console.log("Identifier", Utility.inspect(instance, { colors: true }));

        expect(instance.identifier).toEqual("identifier");
    });

    it("Properties", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Parameter");

        console.log("Properties", Utility.inspect(instance, { colors: true }));

        expect(instance.properties).toEqual(5);
    });
} );

describe( "Unit Test (Identifier)", () => {
    const input = "organization/environment/application/resource/identifier";

    it("Generator", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Identifier");

        console.log("Instance", Utility.inspect(instance, { colors: true }));

        expect(instance).toBeTruthy();
    });

    it("Organization", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Identifier");

        console.log("Organization", Utility.inspect(instance, { colors: true }));

        expect(instance.organization).toEqual("organization");
    });

    it("Environment", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Identifier");

        console.log("Environment", Utility.inspect(instance, { colors: true }));

        expect(instance.environment).toEqual("environment");
    });

    it("Application", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Identifier");

        console.log("Application", Utility.inspect(instance, { colors: true }));

        expect(instance.application).toEqual("application");
    });

    it("Resource", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Identifier");

        console.log("Resource", Utility.inspect(instance, { colors: true }));

        expect(instance.resource).toEqual("resource");
    });

    it("Identifier", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Identifier");

        console.log("Identifier", Utility.inspect(instance, { colors: true }));

        expect(instance.identifier).toEqual("identifier");
    });

    it("Properties", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Identifier");

        console.log("Properties", Utility.inspect(instance, { colors: true }));

        expect(instance.properties).toEqual(5);
    });
} );

describe( "Unit Test (Default)", () => {
    const input = "organization/environment/application/resource";

    it("Generator", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Default");

        console.log("Instance", Utility.inspect(instance, { colors: true }));

        expect(instance).toBeTruthy();
    });

    it("Organization", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Default");

        console.log("Organization", Utility.inspect(instance, { colors: true }));

        expect(instance.organization).toEqual("organization");
    });

    it("Environment", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Default");

        console.log("Environment", Utility.inspect(instance, { colors: true }));

        expect(instance.environment).toEqual("environment");
    });

    it("Application", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Default");

        console.log("Application", Utility.inspect(instance, { colors: true }));

        expect(instance.application).toEqual("application");
    });

    it("Resource", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Default");

        console.log("Resource", Utility.inspect(instance, { colors: true }));

        expect(instance.resource).toEqual("resource");
    });

    it("Properties", async () => {
        const Import = await import("@cloud-technology/parameter");

        const instance = Import.Parameter.create(input, "Default");

        console.log("Properties", Utility.inspect(instance, { colors: true }));

        expect(instance.properties).toEqual(4);
    });
} );
