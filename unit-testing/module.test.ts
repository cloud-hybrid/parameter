import { Parameter } from "..";

describe( "Unit Test", () => {
    it.todo( "@Task Example ..." );

    const parameter = new Parameter({
        organization: "organization",
        environment: "environment",
        application: "application",
        resource: "resource",
        provider: "provider",
        identifier: "identifier"
    });

    it("environment", () => expect(parameter).toHaveProperty("environment"));
    it("application", () =>expect(parameter).toHaveProperty("application"));
    it("resource", () => expect(parameter).toHaveProperty("resource"));
    it("provider", () => expect(parameter).toHaveProperty("provider"));
    it("identifier", () => expect(parameter).toHaveProperty("identifier"));
} );
