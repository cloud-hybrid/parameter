import Utility from "util";

import { Parameter } from "..";

describe( "String Unit Test", () => {
    const parameter = new Parameter( {
        organization: "organization",
        environment: "environment",
        application: "application",
        resource: "resource",
        provider: "provider",
        identifier: "identifier"
    } );

    it( "Truth", async () => {
        const $ = parameter.format();
        console.log( "Format" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Organization", async () => {
        const $ = parameter.format();
        console.log( "Format ($.organization)" + ":", Utility.inspect( $.organization, { colors: true } ) );
        expect( $.organization ).toEqual("organization");
    } );

    it( "Environment", async () => {
        const $ = parameter.format();
        console.log( "Format ($.environment)" + ":", Utility.inspect( $.environment, { colors: true } ) );
        expect( $.environment ).toEqual("environment");
    } );

    it( "Application", async () => {
        const $ = parameter.format();
        console.log( "Format ($.application)" + ":", Utility.inspect( $.application, { colors: true } ) );
        expect( $.application ).toEqual("application");
    } );

    it( "Resource", async () => {
        const $ = parameter.format();
        console.log( "Format ($.resource)" + ":", Utility.inspect( $.resource, { colors: true } ) );
        expect( $.resource ).toEqual("resource");
    } );

    it( "Provider", async () => {
        const $ = parameter.format();
        console.log( "Format ($.provider)" + ":", Utility.inspect( $.provider, { colors: true } ) );
        expect( $.provider ).toEqual("provider");
    } );

    it( "Identifier", async () => {
        const $ = parameter.format();
        console.log( "Format ($.identifier)" + ":", Utility.inspect( $.identifier, { colors: true } ) );
        expect( $.identifier ).toEqual("identifier");
    } );
} );
