For async handlers, you can use return and throw to send a response or error, respectively. Functions must use the async
keyword to use these methods to return a response or error.

If the code performs an asynchronous task, **return a promise to make sure that it finishes running**. 

- *Do not await it* - the promise is the broker's responsibility; unless the promise is needed for
additional runtime logic, there's no need to await it, and worse, there's potential conflicts 
when it comes down to reuse, connections, and pooling

When resolving or rejecting the promise, AWS Lambda sends the response or error to the invoker.

The most simplistic example:

```node
/// For libraries that return a promise, return that promise directly to the runtime.

const AWS = require("aws-sdk");
const S3 = new AWS.S3();

exports.handler = async (event) => { 
    return S3.listBuckets().promise();
};
```

Example index.js file – HTTP request with async handler and promises

```js
const https = require("https");

const URL = "https://gitlab.cloud-vault.io";

console.debug("[Debug] Initializing Lambda Function ...");
exports.handler = async (event, context) => {
    console.debug("[Debug] Context" + ":", JSON.stringify(context, null, 4));
    
    const promise = new Promise((resolve, reject) => {
        https.get(URL, (res) => {
            resolve(res.statusCode)
        }).on("error", (e) => {
            reject(Error(e))
        })
    });
    
    return promise;
}
```