import { Properties } from "@cloud-technology/parameter";

describe( "String Unit Test", () => {
    const $ = Properties;

    it( "Default", async () => {
        expect( $.Default ).toEqual(4)
    } );

    it( "Parameter", async () => {
        expect( $.Parameter ).toEqual(6)
    } );

    it( "Identifier", async () => {
        expect( $.Identifier ).toEqual(5)
    } );

    it( "Provider", async () => {
        expect( $.Provider ).toEqual(5)
    } );
} );
