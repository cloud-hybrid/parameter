# `@cloud-technology/parameter` #

## Usage ##

| Package Script | NPM Command Invocation | Description                                     |
|----------------|------------------------|-------------------------------------------------|
| **test**       | `npm test`             | Unit-Test the Distribution                      |
| **watch**      | `npm run watch`        | Unit-Test Upon File-System Change(s)            |
| **build**      | `npm run build`        | Compile Distribution Upon File-System Change(s) |
| **compile**    | `npm run compile`      | Compile Distribution                            |
| **upload**     | `npm run upload`       | Deploy Package to NPM Registry                  |

test watch build compile upload reinstall prepublishOnly

### Local Development ###

1. Install
    ```bash
    npm install --quiet
    ```
2. Build or Compile
    - **Compile**: `npm run compile`
    ```bash
    npm run build
    ```
3. Test
    ```bash
    npm test
    ```
