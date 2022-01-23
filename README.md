# `@cloud-technology/parameter` #

*A Zero-Dependency Type-Interface via Node.js*

Parameters often used during configuration can be a difficult concept to standardize.

`@cloud-technology/parameter` aims to strictly define a naming and constructor convention
to ease efforts associated with configuration, while allowing for an easy inheritance
pattern to further extend from; examples of applicable extensions include usages with:

- `etcd`
- Hashicorp's `vault`
- AWS Secure Systems Manager
- AWS Secrets Manager
- Microsoft Cloud Vault
- GCP Credential Management 

## Table of Contents ##

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Usage](#usage)
  - [Development](#development)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage ##

`@cloud-technology/parameter` uses the latest Node.js LTS version; to quickly enable, run `nvm use`.

- See [installation guide](https://github.com/nvm-sh/nvm#about) for a quick walk-through on installing `nvm`.

| Package Script | NPM Command Invocation | Description                                     |
|----------------|------------------------|-------------------------------------------------|
| **test**       | `npm test`             | Unit-Test the Distribution                      |
| **start**      | `npm start`            | Compile + Unit-Test the Distribution            |
| **watch**      | `npm run watch`        | Unit-Test Upon File-System Change(s)            |
| **build**      | `npm run build`        | Compile Distribution Upon File-System Change(s) |
| **compile**    | `npm run compile`      | Compile Distribution                            |
| **upload**     | `npm run upload`       | Deploy Package to NPM Registry                  |

### Development ###

**Recommended** - Testing Mode

Locally developing with `jest` file-watchers helps ensure non-breaking change are introduced.

1. Install Dependencies
    ```bash
    npm install --quiet
    ```
2. Build `*.ts` File(s), Enabling TSC File-Watching
    ```bash
    npm run build
    ```
3. Open an Additional TTY and Run 
    ```bash
    npm run start
    ```

Lastly, continue with development.

For alternative build & unit-testing commands, please refer to the [commands list](#usage).

## Documentation ##

Please see [documentation](./documentation) for additional information and reference(s).