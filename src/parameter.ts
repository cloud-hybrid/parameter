import { Title, Lowercase, Case } from "./train-case";

class Parameter implements Options {
    organization: string;
    environment: string;
    application: string;

    resource: string;

    provider: string | null = null;
    identifier: string | null = null;

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

    public string(type: Type|string = Type.Directory) {
        switch (this.properties) {
            case Properties.Provider || Properties.Identifier: {
                const $ = [
                    this.organization,
                    this.environment,
                    this.application,
                    this.resource,

                    this.provider ?? this.identifier,
                ].join((type === "Directory")
                    ? "/" : (type === "Screaming-Train-Case")
                        ? "-" : "/"
                );

                const cast = Case($, {condense: false});
                return (type === "Screaming-Train-Case") ? Title(cast)
                    : (type === "Train-Case") ? cast
                        : $;
            }

            case Properties.Parameter: {
                const $ = [
                    this.organization,
                    this.environment,
                    this.application,
                    this.resource,

                    this.provider,
                    this.identifier,
                ].join((type === "Directory")
                    ? "/" : (type === "Screaming-Train-Case")
                        ? "-" : "/"
                );

                const cast = Case($, {condense: false});
                return (type === "Screaming-Train-Case") ? Title(cast)
                    : (type === "Train-Case") ? cast
                        : $;
            }

            case Properties.Default: {
                const $ = [
                    this.organization,
                    this.environment,
                    this.application,
                    this.resource
                ].join((type === "Directory")
                    ? "/" : (type === "Screaming-Train-Case")
                        ? "-" : "/"
                );

                const cast = Case($, {condense: false});
                return (type === "Screaming-Train-Case") ? Title(cast)
                    : (type === "Train-Case") ? cast
                        : $;
            }
        }
    }

    /***
     *
     * @protected
     * @summary
     * @returns {Properties|{4, 5, 5, 6}}
     */
    protected enumerations(): Properties {
        return (this.provider && this.identifier) ? 6
            : (this.provider && !this.identifier) ? 5
                : (this.identifier && !this.provider) ? 5
                    : 4;
    }
}

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
     * provider - Service(s) either Consumed or Provided
     *
     * @type {string}
     */
    resource: string;

    /***
     * resource - Descriptive Identifier
     *
     * @type {string}
     */
    provider: string | null;

    /***
     * identifier - Additional, Optional String
     *
     * @type {string}
     */
    identifier: string | null;
}

export { Parameter };

export default Parameter;
