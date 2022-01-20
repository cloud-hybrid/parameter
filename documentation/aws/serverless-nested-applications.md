# AWS Nested Applications #

https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/secrets

You can define nested applications by using applications that are stored on your local file system. You do this by
specifying the path to the AWS SAM template file that's stored on your local file system.

```yaml
Transform: AWS::Serverless-2016-10-31

Resources:
    applicationaliasname:
        Type: AWS::Serverless::Application
        Properties:
            Location: "../my-other-app/template.yaml"
            Parameters:
                Parameter: "OVERRIDE"
```

## Local & Deployment Recommendations ##

Take advantage of execution environment reuse to improve the performance of your function. Initialize SDK clients and
database connections outside of the function handler, and cache static assets locally in the /tmp directory.

Subsequent invocations processed by the same instance of your function can reuse these resources. This saves cost by
reducing function run time. To avoid potential data leaks across invocations, don’t use the execution environment to
store user data, events, or other information with security implications. If your function relies on a mutable state
that can’t be stored in memory within the handler, consider creating a separate function or separate versions of a
function for each user.

Use a keep-alive directive to maintain persistent connections. Lambda purges idle connections over time. Attempting to
reuse an idle connection when invoking a function will result in a connection error. To maintain your persistent
connection, use the keep-alive directive associated with your runtime. For an example, see Reusing Connections with
Keep-Alive in Node.js.

Use environment variables to pass operational parameters to your function. For example, if you are writing to an Amazon
S3 bucket, instead of hard-coding the bucket name you are writing to, configure the bucket name as an environment
variable.

Control the dependencies in your function's deployment package. The AWS Lambda execution environment contains a number
of libraries such as the AWS SDK for the Node.js and Python runtimes (a full list can be found here: Lambda runtimes).
To enable the latest set of features and security updates, Lambda will periodically update these libraries. These
updates may introduce subtle changes to the behavior of your Lambda function. To have full control of the dependencies
your function uses, package all of your dependencies with your deployment package.

Minimize your deployment package size to its runtime necessities. This will reduce the amount of time that it takes for
your deployment package to be downloaded and unpacked ahead of invocation. For functions authored in Java or .NET Core,
avoid uploading the entire AWS SDK library as part of your deployment package. Instead, selectively depend on the
modules which pick up components of the SDK you need (e.g. DynamoDB, Amazon S3 SDK modules and Lambda core libraries).

## Acknowledgements ##

By default, the default Node.js HTTP/HTTPS agent creates a new TCP connection for every new request. To avoid the cost
of establishing a new connection, you can reuse an existing connection.

For short-lived operations, such as DynamoDB queries, the latency overhead of setting up a TCP connection might be
greater than the operation itself. Additionally, since DynamoDB encryption at rest is integrated with AWS KMS, you may
experience latencies from the database having to re-establish new AWS KMS cache entries for each operation.

The easiest way to configure SDK for JavaScript to reuse TCP connections is to set the
`AWS_NODEJS_CONNECTION_REUSE_ENABLED` environment variable to 1. This feature was added in the 2.463.0 release.

Alternatively, you can set the keepAlive property of an HTTP or HTTPS agent set to true, as shown in the following
example.

```node
const AWS = require('aws-sdk'); 

// http or https 
const http = require('http');

// Infinity is read as 50 sockets
const agent = new http.Agent({ keepAlive: true, maxSockets: Infinity });

// Update runtime's global configuration
AWS.config.update({ httpOptions: { agent } });
```