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

    it( "Default", async () => {
        const $ = parameter.string();
        console.log( "String" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Train-Case", async () => {
        const $ = parameter.string( "Train-Case" );
        console.log( "Train-Case" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Screaming-Train-Case", async () => {
        const $ = parameter.string( "Screaming-Train-Case" );
        console.log( "Screaming-Train-Case" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Directory", async () => {
        const $ = parameter.string("Directory");
        console.log( "Directory" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );
} );
