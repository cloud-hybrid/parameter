import { Title, Case } from "./train-case.js";

enum Type {
    /// Directory type
    Directory = "Directory",
    /// Screaming-Train-Case string
    Train = "Screaming-Train-Case",
    /// Train-Case string
    Dash = "Train-Case"
}

enum Properties {
    /*** Number of Properties used with Parameter.default Constructor */
    Default = 4,
    /*** Number of Properties used when Negating the Identifier property, but inclusion of Provider */
    Provider = 5,
    /*** Number of Properties used when Negating the Provider property, but inclusion of Identifier */
    Identifier = 5,
    /*** Number of Properties used with a Full Parameter constructor call */
    Parameter = 6
}

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
     * |   **Provider**   |   *Optional*   |  Service(s) either Consumed or Provided   |     `S3`, `EC2`, `CFN`      |
     * |   **Resource**   |   *Required*   |          Descriptive Identifier           | `Log-Results`. `Artifacts`  |
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
            }


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
            else {
                if ( this.properties === 6 ) {
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
