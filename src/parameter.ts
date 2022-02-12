import { Title, Case } from "./train-case.js";

/***
 * Type Enumeration
 * ---
 *
 * @public
 *
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
 *
 * @public
 *
 * @property {number} Default - Number of Properties used with Parameter.default Constructor.
 * @property {number} Identifier - Number of Properties used with inclusion of Identifier.
 * @property {number} Parameter - Number of Properties used with a Full Parameter constructor call.
 *
 */

enum Properties {
    /*** Number of Properties used with Parameter.Default Constructor */
    Default = 4,
    /*** Number of Properties used with Parameter.Resource Constructor */
    Resource = 4,
    /*** Number of Properties used with Parameter.Service Constructor */
    Service = 4,
    /*** Number of Properties used with inclusion of Identifier */
    Identifier = 5,
    /*** Number of Properties used with a Full Parameter constructor call */
    Parameter = 5
}

type Selectable = keyof typeof Properties;

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
 * Please keep in mind that the **`*.service`** attribute, while a possible
 * subtype, is more or less arbitrary as to what it's describing. Rather, the
 * `Parameter.service` dot-product should be thought as a *service*,
 * *resource*, or *identifier*.
 *
 */

class Parameter implements Options {
    /***
     * organization - Target Deliverable Maintainer
     *
     * @type {string}
     *
     */

    organization: string;

    /***
     * environment - Network (L2) Seperated Alias
     *
     * @type {string}
     *
     */

    environment: string;

    /***
     * application - Stack, Functional Purpose, or Common-Name
     *
     * @type {string}
     *
     */

    application: string;

    /***
     * service - Descriptive Identifier Key-Word, typically used to describe:
     *     - A Cloud Resource
     *     - A Service
     *
     * @type {string}
     *
     */

    service: string;


    /***
     * identifier - Additional, Optional String
     *
     * @type {string|null|undefined}
     *
     */

    identifier?: string | undefined;

    properties: Properties;

    /***
     *
     * |             Key             |   Requirement  |                Description                |           Example(s)            |
     * |:---------------------------:|:--------------:|:-----------------------------------------:|:-------------------------------:|
     * |        **Organization**     |   *Required*   |                    ...                    |              `IBM`              |
     * |         **Environment**     |   *Required*   |       Network (L2) Seperated Alias        |    `Development`, `Production`  |
     * |        **Application**      |   *Required*   | Stack, Functional Purpose, or Common-Name |    `Financial-Audit-Service`    |
     * |          **Service**        |   *Required*   | Distributed System, Infrastructure, or ID | `Mongo-DB`, `S3`, `Credentials` |
     * |        **Identifier**       |   *Optional*   |        Additional, Optional String        |      `VPC-ID`, `Private-Key`    |
     *
     * @param {Options} options - Constructor parameters type
     *
     */

    constructor(options: Options) {
        this.organization = options.organization;
        this.environment = options.environment;
        this.application = options.application;

        this.service = options.service;

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
            service: this.service,
            identifier: this.identifier
        };
    }

    /***
     * Evaluate the instantiated Parameter type according to the number
     * of total attributes -- return a generated string.
     *
     * @constructor
     *
     * @type {Function}
     *
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
                this.service
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
         * - `resource` or `service`
         * - `identifier`
         *
         * then construct a string, first joining an array for the initialized attributes,
         * according to either a `"Directory"`, `"Train-Case"`, or `"Screaming-Train-Case"`
         * string convention.
         *
         * @type {string}
         *
         */
        else {
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
                this.service,
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
    }

    /***
     * Enumeration Evaluation
     * ---
     *
     * @private
     *
     * @returns {Properties}
     *
     */

    public enumerations(): Properties {
        return (this.identifier) ? Properties.Parameter : Properties.Default;
    }

    /***
     * String -> Parameter Initializer
     * ---
     *
     * Note that only `Directory` types can only be instantiated from any given string,
     * and only a full 5-attribute Parameter type is compatible.
     *
     * @example
     * const $ = Parameter.instantiate("organization/environment/application/resource/identifier");
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
            $.message += "  - Example: \"IBM/Production/Audit-Service/Storage/Credentials\"" + "\n";

            throw $;
        }

        return new Parameter( {
            organization: split[0],
            environment: split[1],
            application: split[2],
            service: split[3],
            identifier: split[4]
        } );
    }

    /***
     * String -> Parameter Initializer via Selectable type
     * ---
     *
     * Note that only `Directory` types can only be instantiated from any given string.
     * But via the properties' argument, a parameter can be instantiated from either a
     * 4-attribute, or 5-attribute directory-separated string.
     *
     * @see {@link create} for additional examples.
     *
     * @example
     * // The same type as "Identifier", and contains
     * // the following "/" separated attributes:
     * //     - Organization
     * //     - Environment
     * //     - Application
     * //     - Resource, Service, or Identifier
     *
     * const $ = "IBM/Production/Auditing-Platform/Authorization-Service";
     * Parameter.create($, "Default");
     *
     * @example
     * // The same type as "Identifier", and contains
     * // the following "/" separated attributes:
     * //     - Organization
     * //     - Environment
     * //     - Application
     * //     - Resource, Service, or Identifier
     *
     * const $ = "IBM/Production/Auditing-Platform/Authorization-Service";
     * Parameter.create($, "Resource");
     *
     * @example
     * // The same type as "Service", and contains
     * // the following "/" separated attributes:
     * //     - Organization
     * //     - Environment
     * //     - Application
     * //     - Resource, Service, or Identifier
     *
     * const $ = "IBM/Production/Auditing-Platform/Authorization-Service";
     * Parameter.create($, "Service");
     *
     * @example
     * // The Parameter-Type "Identifier", which contains
     * // the following "/" separated attributes:
     * //     - Organization
     * //     - Environment
     * //     - Application
     * //     - Resource or Service
     * //     - Identifier
     *
     * const $ = "IBM/Production/Audit-Service/Watson-AI/Credentials";
     * Parameter.create($, "Identifier");
     *
     * @example
     * // The Parameter-Type "Parameter" (same as "Identifier"), which contains
     * // the following "/" separated attributes:
     * //     - Organization
     * //     - Environment
     * //     - Application
     * //     - Resource or Service
     * //     - Identifier
     *
     * const $ = "IBM/Production/Audit-Service/Watson-AI/Credentials";
     * Parameter.create($, "Parameter");
     *
     * @example
     * // Lastly, note that `Parameter.create` `properties` defaults with the extended
     * // parameter type `"Parameter"`; therefore, and as a recommendation,
     * // establishing the `properties` should be omitted.
     *
     * const $ = "IBM/Production/Audit-Service/Watson-AI/Credentials";
     * Parameter.create($);
     *
     * // All examples will then return a new `Parameter`, and depending
     * // on the `properties` type, will contain the following attributes:
     * //   - *.organization
     * //   - *.environment
     * //   - *.application
     * //   - *.resource
     * //   - *?.identifier
     *
     * @param {string} value
     * @param {Selectable} properties
     * @param {boolean} debug
     *
     * @return {Parameter}
     *
     */

    public static create(value: string, properties: Selectable = "Parameter", debug: boolean = false): Parameter {
        if ( properties === "Default" ) { /// 4 Total Properties
            (debug) && console.debug( "[Debug]", "Type" + ":", "Default, 4" );

            const split = value.split( "/" );

            (debug) && console.debug( "[Debug]", "Properties" + ":", split );

            const enumerable = (split.length === Properties.Default);

            (debug) && console.debug( "[Debug]", "Enumerable" + ":", enumerable );

            /*** No Identifier Type */
            if ( !enumerable ) { /// Only should contain 4 directories
                const $ = new Error( "Parameter-Enumeration-Error" );
                $.name = "Parameter-Enumeration-Error";
                $.message = "\n";

                $.message += "Invalid Number of \"/\" Separated Attributes" + "\n";
                $.message += "  - Example: \"IBM/Production/Audit-Platform/Authorization-Credentials\"" + "\n";

                throw $;
            }

            return new Parameter( {
                organization: split[0],
                environment: split[1],
                application: split[2],
                service: split[3]
            } );
        } else {
            if ( properties === "Identifier" || properties === "Parameter" ) { /// 5 Total Properties
                (debug) && console.debug( "[Debug]", "Type" + ":", "Identifier, 5" );

                const split = value.split( "/" );

                (debug) && console.debug( "[Debug]", "Properties" + ":", split );

                const enumerable = (split.length === Properties.Parameter || split.length === Properties.Identifier);

                (debug) && console.debug( "[Debug]", "Enumerable" + ":", enumerable );

                /*** No Identifier Type */
                if ( !enumerable ) { /// Only should contain 5 directories
                    const $ = new Error( "Parameter-Enumeration-Error" );
                    $.name = "Parameter-Enumeration-Error";
                    $.message = "\n";

                    $.message += "Invalid Number of \"/\" Separated Attributes" + "\n";
                    $.message += "  - Example: \"IBM/Production/Audit-Platform/Watson-AI/Credentials\"" + "\n";

                    throw $;
                }

                return new Parameter( {
                    organization: split[0],
                    environment: split[1],
                    application: split[2],
                    service: split[3],
                    identifier: split[4]
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
     *
     */

    organization: string;

    /***
     * environment - Network (L2) Seperated Alias
     *
     * @type {string}
     *
     */

    environment: string;

    /***
     * application - Stack, Functional Purpose, or Common-Name
     *
     * @type {string}
     *
     */

    application: string;

    /***
     * service - Descriptive Identifier Key-Word, typically used to describe:
     *     - A Cloud Resource
     *     - A Service
     *
     * @type {string}
     *
     */

    service: string;

    /***
     * identifier - Additional, Optional String
     *
     * @type {string|null|undefined}
     *
     */

    identifier?: string | undefined;
}

export type { Options };

export { Parameter, Type, Properties };

export default { Parameter };
