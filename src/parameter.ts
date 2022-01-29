import { Title, Case } from "./train-case";

/***
 * Type Enumeration
 * ---
 * @public
 * @property Directory {string} - Directory type
 * @property Train {string} - Screaming-Train-Case string
 * @property Dash {string} - Train-Case string
 *
 */
enum Type {
    /// Directory type
    Directory = "Directory",
    /// Screaming-Train-Case string
    Train = "Screaming-Train-Case",
    /// Train-Case string
    Dash = "Train-Case"
}

/***
 * Properties Enumeration
 * ---
 * @public
 *
 * @property {number} Default - Number of Properties used with Parameter.default Constructor.
 * @property {number} Provider - Number of Properties used when Negating the Identifier property, but inclusion of Provider.
 * @property {number} Identifier - Number of Properties used when Negating the Provider property, but inclusion of Identifier.
 * @property {number} Parameter - Number of Properties used with a Full Parameter constructor call.
 */

enum Properties {
    /*** Number of Properties used with Parameter.default Constructor */
    Default = 4,
    /*** Number of Properties used when negating the Identifier property, but inclusion of Provider */
    Provider = 5,
    /*** Number of Properties used when negating the Provider property, but inclusion of Identifier */
    Identifier = 5,
    /*** Number of Properties used with a Full Parameter constructor call */
    Parameter = 6
}

type Selectable = keyof typeof Properties;

type Defaults = "identifier" | "provider";

/***
 * *A Zero-Dependency Type-Interface via Node.js*
 *
 * Parameters often used during configuration can be a
 * difficult concept to standardize.
 *
 * `@cloud-technology/parameter` aims to strictly define
 * a naming and constructor convention to ease efforts associated
 * with configuration, while allowing for an easy inheritance
 * pattern to further extend from; examples of applicable
 * extensions include usages with:
 *
 * - `etcd`
 * - Hashicorp's `vault`
 * - AWS Secure Systems Manager
 * - AWS Secrets Manager
 * - Microsoft Cloud Vault
 * - GCP Credential Management
 *
 */
class Parameter implements Options {
    /***
     * organization - Target Deliverable Maintainer
     *
     * @type {string}
     */
    organization: string;

    /***
     * environment - Network (L2) Seperated Alias
     *
     * @type {string}
     */
    environment: string;

    /***
     * application - Stack, Functional Purpose, or Common-Name
     *
     * @type {string}
     */
    application: string;

    /***
     * resource - Descriptive Identifier
     *
     * @type {string}
     */
    resource: string;

    /***
     * provider - Service(s) either Consumed or Provided
     *
     * @type {string|null|undefined}
     */
    provider?: string | null | undefined = null;

    /***
     * identifier - Additional, Optional String
     *
     * @type {string|null|undefined}
     */
    identifier?: string | null | undefined = null;

    properties: Properties;

    static default: Options = {
        organization: "cloud-technology",
        environment: "development",
        application: "temporary",
        resource: "parameter",
        provider: null,
        identifier: null
    };

    /***
     *
     * |       Key        |   Requirement  |                Description                |         Example(s)          |
     * |:----------------:|:--------------:|:-----------------------------------------:|:---------------------------:|
     * | **Organization** |   *Required*   |                    ...                    |            `IBM`            |
     * | **Environment**  |   *Required*   |       Network (L2) Seperated Alias        | `Development`, `Production` |
     * | **Application**  |   *Required*   | Stack, Functional Purpose, or Common-Name |  `Financial-Audit-Service`  |
     * |   **Resource**   |   *Required*   |          Descriptive Identifier           | `Log-Results`. `Artifacts`  |
     * |   **Provider**   |   *Optional*   |  Service(s) either Consumed or Provided   |     `S3`, `EC2`, `CFN`      |
     * |  **Identifier**  |   *Optional*   |        Additional, Optional String        |   `VPC-ID`, `Private-Key`   |
     *
     * @param {Options} options - Constructor parameters type
     *
     */

    constructor(options: Options = Parameter.default) {
        this.organization = options.organization;
        this.environment = options.environment;
        this.application = options.application;

        this.resource = options.resource;

        this.provider = options.provider;
        this.identifier = options.identifier;

        /*** Utility Properties */
        this.properties = this.enumerations();
    }

    /***
     * Format the Parameter Type into a Hashable Object
     *
     * @public
     * @summary Useful for attributing input for other Parameter constructor(s)
     * @constructor
     *
     * @returns {Options}
     *
     */
    public format(): Options {
        return {
            organization: this.organization,
            environment: this.environment,
            application: this.application,
            resource: this.resource,
            provider: this.provider,
            identifier: this.identifier
        };
    }

    /***
     * Evaluate the instantiated Parameter type according to the number
     * of total attributes -- return a generated string.
     *
     * @constructor
     * @type {Function}
     * @return {String}
     *
     */
    public string(type: Type | string = Type.Directory): string {
        /***
         * If the constructor instantiated a Parameter type with the following attributes:
         * - `organization`
         * - `environment`
         * - `application`
         * - `resource`
         *
         * then construct a string, first joining an array for the initialized attributes,
         * according to either a `"Directory"`, `"Train-Case"`, or `"Screaming-Train-Case"`
         * string convention.
         *
         * @type {string}
         *
         */
        if ( this.properties === 4 ) {
            /***
             * A temporary variable used to construct a string according
             * to the `"Type"` and `"Property"` enumeration.
             *
             * @type {string}
             */
            const property: string = [
                this.organization,
                this.environment,
                this.application,
                this.resource
            ].join( (type === "Directory")
                ? "/" : (type === "Screaming-Train-Case")
                    ? "-" : "/"
            );

            /***
             * String cast to user-defined convention of one of the following:
             * - Directory = "Directory",
             * - Train = "Screaming-Train-Case",
             * - Dash = "Train-Case"
             *
             * @type {string}
             */
            const cast: string = Case( property, { condense: false } );

            /*** Return a potentially titled string, capitalizing according to type */
            return (type === "Screaming-Train-Case") ? Title( cast )
                : (type === "Train-Case") ? cast
                    : property;
        }

        /***
         * If the constructor instantiated a Parameter type with the following attributes:
         * - `organization`
         * - `environment`
         * - `application`
         * - `resource`
         * - `provider` *or* `identifier`
         *
         * then construct a string, first joining an array for the initialized attributes,
         * according to either a `"Directory"`, `"Train-Case"`, or `"Screaming-Train-Case"`
         * string convention.
         *
         * @type {string}
         *
         */
        else {
            if ( this.properties === 5 ) {
                /***
                 * A temporary variable used to construct a string according
                 * to the `"Type"` and `"Property"` enumeration.
                 *
                 * @type {string}
                 */
                const property: string = [
                    this.organization,
                    this.environment,
                    this.application,
                    this.resource,

                    this.provider ?? this.identifier
                ].join( (type === "Directory")
                    ? "/" : (type === "Screaming-Train-Case")
                        ? "-" : "/"
                );

                /***
                 * String cast to user-defined convention of one of the following:
                 * - Directory = "Directory",
                 * - Train = "Screaming-Train-Case",
                 * - Dash = "Train-Case"
                 *
                 * @type {string}
                 */
                const cast: string = Case( property, { condense: false } );

                /*** Return a potentially titled string, capitalizing according to type */
                return (type === "Screaming-Train-Case") ? Title( cast )
                    : (type === "Train-Case") ? cast
                        : property;
            } else {
                /***
                 * If the constructor instantiated a Parameter type with the following attributes:
                 * - `organization`
                 * - `environment`
                 * - `application`
                 * - `resource`
                 * - `provider`
                 * - `identifier`
                 *
                 * then construct a string, first joining an array for the initialized attributes,
                 * according to either a `"Directory"`, `"Train-Case"`, or `"Screaming-Train-Case"`
                 * string convention.
                 *
                 * @type {string}
                 *
                 */
                if ( this.properties === 6 ) {
                    const property: string = [
                        this.organization,
                        this.environment,
                        this.application,
                        this.resource,

                        this.provider,
                        this.identifier
                    ].join( (type === "Directory")
                        ? "/" : (type === "Screaming-Train-Case")
                            ? "-" : "/"
                    );

                    /***
                     * String cast to user-defined convention of one of the following:
                     * - Directory = "Directory",
                     * - Train = "Screaming-Train-Case",
                     * - Dash = "Train-Case"
                     *
                     * @type {string}
                     */
                    const cast: string = Case( property, { condense: false } );

                    /*** Return a potentially titled string, capitalizing according to type */
                    return (type === "Screaming-Train-Case") ? Title( cast )
                        : (type === "Train-Case") ? cast
                            : property;
                }

                /*** Escape Hatch for Code Coverage */

                return JSON.stringify( this.format(), null, 4 );
            }
        }
    }

    /***
     * Enumeration Evaluation
     * ---
     *
     * @public
     * @summary
     * @returns {Properties}
     */
    public enumerations(): Properties {
        return (this.provider && this.identifier) ? Properties.Parameter : (this.provider) ? Properties.Provider : (this.identifier) ? Properties.Identifier : Properties.Default;
    }

    /***
     * String -> Parameter Initializer
     * ---
     *
     * Note that only `Directory` types can only be instantiated from any given string,
     * and only a full 6-attribute Parameter type is compatible.
     *
     * @example
     * const $ = Parameter.instantiate("organization/environment/application/resource/provider/identifier");
     *
     * @param {string} value
     * @param {boolean} debug
     *
     * @return {Parameter}
     *
     */
    public static instantiate(value: string, debug: boolean = false): Parameter {
        const split = value.split( "/" );

        (debug) && console.debug( "[Debug]", "Properties" + ":", split );

        const enumerable = (split.length === Properties.Parameter);

        (debug) && console.debug( "[Debug]", "Enumerable" + ":", enumerable );

        if ( !enumerable ) {
            const $ = new Error( "Parameter-Enumeration-Error" );
            $.name = "Parameter-Enumeration-Error";
            $.message = "\n";

            $.message += "Invalid Number of \"/\" Separated Attributes" + "\n";
            $.message += "  - Example: \"IBM/Production/Audit-Service/Storage/Watson-AI/Credentials\"" + "\n";

            throw $;
        }

        return new Parameter( {
            organization: split[0],
            environment: split[1],
            application: split[2],
            resource: split[3],
            provider: split[4],
            identifier: split[5]
        } );
    }

    /***
     * String -> Parameter Initializer via Selectable type
     * ---
     *
     * Note that only `Directory` types can only be instantiated from any given string,
     * but via the properties argument, can be instantiated from either a 4-attribute, 5-attribute, or 6-attribute
     * directory-separated string.
     *
     * @example
     * const $ = Parameter.create("organization/environment/application/resource");
     *
     * @example
     * const $ = Parameter.create("organization/environment/application/resource/provider");
     *
     * @example
     * const $ = Parameter.create("organization/environment/application/resource/identifier");
     *
     * @example
     * const $ = Parameter.create("organization/environment/application/resource/provider/identifier");
     *
     * @param {string} value
     * @param {Selectable} properties
     * @param {Defaults} defaults
     * @param {boolean} debug
     *
     * @return {Parameter}
     *
     */
    public static create(value: string, properties: Selectable, defaults: Defaults = "identifier", debug: boolean = false): Parameter {
        if ( properties === "Default" ) { /// 4 Total Properties
            (debug) && console.debug( "[Debug]", "Type" + ":", "Default, 4" );

            const split = value.split( "/" );

            (debug) && console.debug( "[Debug]", "Properties" + ":", split );

            const enumerable = (split.length === Properties.Default);

            (debug) && console.debug( "[Debug]", "Enumerable" + ":", enumerable );

            /*** No Provider Type, and no Identifier Type */
            if ( !enumerable ) { /// Only should contain 4 directories
                const $ = new Error( "Parameter-Enumeration-Error" );
                $.name = "Parameter-Enumeration-Error";
                $.message = "\n";

                $.message += "Invalid Number of \"/\" Separated Attributes" + "\n";
                $.message += "  - Example: \"IBM/Production/Audit-Service/Credentials\"" + "\n";

                throw $;
            }

            return new Parameter( {
                organization: split[0],
                environment: split[1],
                application: split[2],
                resource: split[3]
            } );
        } else {
            if ( properties === "Provider" || properties === "Identifier" ) { /// 5 Total Properties
                (debug) && console.debug( "[Debug]", "Type" + ":", "Provider || Identifier, 5" );

                const split = value.split( "/" );

                (debug) && console.debug( "[Debug]", "Properties" + ":", split );

                const enumerable = (split.length === Properties.Provider && split.length === Properties.Identifier);

                (debug) && console.debug( "[Debug]", "Enumerable" + ":", enumerable );

                /*** No Provider Type, and no Identifier Type */
                if ( !enumerable ) { /// Only should contain 5 directories
                    const $ = new Error( "Parameter-Enumeration-Error" );
                    $.name = "Parameter-Enumeration-Error";
                    $.message = "\n";

                    $.message += "Invalid Number of \"/\" Separated Attributes" + "\n";
                    $.message += "  - Example: \"IBM/Production/Audit-Service/Watson-AI/Credentials\"" + "\n";
                    $.message += "  - Example: \"IBM/Production/Audit-Service/Billing-Account/Credentials\"" + "\n";

                    throw $;
                }

                return (defaults === "identifier")
                    ? new Parameter( {
                        organization: split[0],
                        environment: split[1],
                        application: split[2],
                        resource: split[3],
                        identifier: split[4]
                    } ) : new Parameter( {
                        organization: split[0],
                        environment: split[1],
                        application: split[2],
                        resource: split[3],
                        provider: split[4]
                    } );
            } else {
                return Parameter.instantiate( value, debug );
            }
        }
    }
}

interface Options {
    /***
     * organization - Target Deliverable Maintainer
     *
     * @type {string}
     */
    organization: string;

    /***
     * environment - Network (L2) Seperated Alias
     *
     * @type {string}
     */
    environment: string;

    /***
     * application - Stack, Functional Purpose, or Common-Name
     *
     * @type {string}
     */
    application: string;

    /***
     * resource - Descriptive Identifier
     *
     * @type {string}
     */
    resource: string;

    /***
     * provider - Service(s) either Consumed or Provided
     *
     * @type {string|null|undefined}
     */
    provider?: string | null | undefined;

    /***
     * identifier - Additional, Optional String
     *
     * @type {string|null|undefined}
     */
    identifier?: string | null | undefined;
}

export type { Options };

export { Parameter, Type, Properties };

export default { Parameter };
