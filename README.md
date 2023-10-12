# Amazon Automated Testing with Playwright

Welcome to the Amazon automated testing project using PlayWright. This REANDME will
guide you throught

## Getting started

### Pre-requisites

Before you begin, make sure you have the followoing pre-requisites

1. Node.js: Download and install Node.js 
2. TextEditor: Download and install any Text Editor like Visual Code or Integrated Development Environment

### Installation

To set up project and dependencies, follow whese steps:

1. Clone  this repository to your local machine using the following command
```bash
git clone https://github.com/MOrekhovskyi/hometask
```
2. Navigate to project's directory, on terminal and run the following commands:

```bash
npm install
npx playwright install
```

All the dependencies from package.json would be installed in node_modules folder.

### How to write Test

To create automated tests for the Amazon project, follow these steps

1. Add a new test specification
    * Add new spec under `e2e` folder
    * Name the file as <testname>.spec.ts (e.g. home.spec.ts)
* Create folder under page-objects/pages as <name-page> (e.g. homePage)

### How to Run Test

You can execute your tests using PlayWright witj the followong commands:

####  Run a Single Test:

To run a specific test file, use he following command (replace `<fileName>` with your test file name):
```bash
npx playwright test <fileName>.spec.ts 
```

#### Run All Tests: 

To run all tests, simply use:

```bash
npx playwright test 
```

### How to use Linter

To maintain code quality and formatting, we recommend using EALint. Here`s how to utilize it:

#### Run ESLint for a Single File:

To apply ESLint formatting for a single file use terminal command
(replace `<fileName>` and `<product>` with your test file name and derictory):

```bash
    npx eslint --fix Amazon/e2e/<product>/<fileName>.ts
```

#### Run ESLint for a Directory:

To apply ESLint formatting for an entire directory and format all files in a given directory use command
(replace `<product>` with your test derictory):

```bash
    npx eslint --fix Amazon/e2e/<product>/.
```

These instructions should help you get started with automated testing for your amazon-related project using PlayWright. 
If you encounter any issues or have questions, please refer to the documentation or reach out me for support.