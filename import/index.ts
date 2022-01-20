"use strict";

import Path from "path";
import Module from "module";

const $ = ()=> { return "" };

const Import = (source: string, module: string) => Module.createRequire( Path.resolve( source, $() ) )( module );

export default Import;

export const Package = (source: string, module: string) => {
    try {
        return Module.createRequire( Path.resolve( source, $() ) )( module );
    } catch {
        $();
    }
};