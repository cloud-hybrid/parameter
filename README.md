# `@cloud-technology/parameter` #

*A Zero-Dependency Type-Interface via Node.js*

Parameters often used during configuration can be a difficult concept to standardize.

`@cloud-technology/parameter` aims to strictly define a naming and constructor convention
to ease efforts associated with configuration, while allowing for an easy inheritance
pattern to further extend from.

## Usage ##

| Package Script | NPM Command Invocation | Description                                     |
|----------------|------------------------|-------------------------------------------------|
| **test**       | `npm test`             | Unit-Test the Distribution                      |
| **start**      | `npm start`            | Compile + Unit-Test the Distribution            |
| **watch**      | `npm run watch`        | Unit-Test Upon File-System Change(s)            |
| **build**      | `npm run build`        | Compile Distribution Upon File-System Change(s) |
| **compile**    | `npm run compile`      | Compile Distribution                            |
| **upload**     | `npm run upload`       | Deploy Package to NPM Registry                  |

As a convenience, `parameter` can be called to unit-test once successfully installed.

**Example**

```bash
git clone https://github.com/cloud-hybrid/parameter.git ./parameter
cd "${_}" && npm install --silent
npm run compile && parameter
```

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
    npm run watch
    ```

Lastly, continue with development.