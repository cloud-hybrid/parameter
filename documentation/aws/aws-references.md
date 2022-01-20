# AWS References #

## Serverless Design Patterns - Updated Examples ##

- https://github.com/aws-samples/serverless-patterns

## Node.js SDK (v3) Examples ##

- [Repository](https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code)

### Credentials ###

```node
const { fromIni } = require("@aws-sdk/credential-provider-ini");
const s3Client = new S3.S3Client({
    credentials: fromIni({ profile: 'work-account' })
});
```

### Secrets Manager ###

- [Snippet](https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/secrets)

```node
/// client.js

import { SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
// Set the AWS Region.
const REGION = "REGION";
// Set the Secrets Manager Service Object
const secretsClient = new SecretsManagerClient({ region: REGION });
export { secretsClient };

/// service.js

import {
    GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";
import { secretsClient } from "./client.js" ;

// Set the parameters
const params = {
    SecretId: "SECRET_ID", //e.g. arn:aws:secretsmanager:REGION:XXXXXXXXXXXX:secret:mysecret-XXXXXX
};

const run = async () => {
    let data;
    try {
        data = await secretsClient.send(new GetSecretValueCommand(params));
        console.log("data", data);
        return data; // For unit tests.
    } catch (err) {
        console.log("err", err);
    }
    
    let secret;
    if ("SecretString" in data) {
        secret = data.SecretString;
    } else {
        console.log("else:", data);

        // Create a buffer
        const buff = new Buffer(data.SecretBinary, "base64");
        secret = buff.toString("ascii");
    }
    
    return secret;
};

run();
```

## References ##

- [IAM Kitchen Sink](https://github.com/aws/serverless-application-model/blob/develop/tests/translator/input/all_policy_templates.yaml)
- [Lambda IAM Policies](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-policy-template-list.html)
- [IAM Access-Keys Rotation](https://github.com/aws-samples/aws-iam-access-key-auto-rotation.git)