import Utility from "util";

import { Parameter, Properties } from "@cloud-technology/parameter";

describe( "String Unit Test", () => {
    const parameter = new Parameter( {
        organization: "organization",
        environment: "environment",
        application: "application",
        service: "service",
        identifier: "identifier"
    } );

    /*** Attributes */
    it( "Attributes", async () => {
        expect( parameter ).toHaveProperty( "organization" );
        expect( parameter ).toHaveProperty( "environment" );
        expect( parameter ).toHaveProperty( "application" );
        expect( parameter ).toHaveProperty( "service" );
        expect( parameter ).toHaveProperty( "identifier" );
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
        const $ = parameter.string( "Directory" );
        console.log( "Directory" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Enumeration", async () => {
        const $ = parameter.enumerations();
        console.log( "Directory" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toEqual( Properties.Parameter );
    } );

    const Default = new Parameter( {
        organization: "organization",
        environment: "environment",
        application: "application",
        service: "service"
    } );

    /*** Attributes */
    it( "Attributes", async () => {
        expect( Default ).toHaveProperty( "organization" );
        expect( Default ).toHaveProperty( "environment" );
        expect( Default ).toHaveProperty( "application" );
        expect( Default ).toHaveProperty( "service" );

        expect( Default.identifier ).toBeFalsy();
    } );

    it( "Default", async () => {
        const $ = Default.string();
        console.log( "String" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Train-Case", async () => {
        const $ = Default.string( "Train-Case" );
        console.log( "Train-Case" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Screaming-Train-Case", async () => {
        const $ = Default.string( "Screaming-Train-Case" );
        console.log( "Screaming-Train-Case" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Directory", async () => {
        const $ = Default.string( "Directory" );
        console.log( "Directory" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Enumeration", async () => {
        const $ = Default.enumerations();
        console.log( "Directory" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toEqual( Properties.Default );
    } );

    const Identifier = new Parameter( {
        organization: "organization",
        environment: "environment",
        application: "application",
        service: "service",
        identifier: "identifier"
    } );

    /*** Attributes */
    it( "Attributes", async () => {
        expect( Identifier ).toHaveProperty( "organization" );
        expect( Identifier ).toHaveProperty( "environment" );
        expect( Identifier ).toHaveProperty( "application" );
        expect( Identifier ).toHaveProperty( "service" );
        expect( Identifier ).toHaveProperty( "identifier" );
    } );

    it( "Default", async () => {
        const $ = Identifier.string();
        console.log( "String" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Train-Case", async () => {
        const $ = Identifier.string( "Train-Case" );
        console.log( "Train-Case" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Screaming-Train-Case", async () => {
        const $ = Identifier.string( "Screaming-Train-Case" );
        console.log( "Screaming-Train-Case" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Directory", async () => {
        const $ = Identifier.string( "Directory" );
        console.log( "Directory" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Enumeration", async () => {
        const $ = Identifier.enumerations();
        console.log( "Directory" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toEqual( Properties.Identifier );
    } );

} );
