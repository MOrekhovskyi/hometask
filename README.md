# `Amazon`

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Installation

Install the dependencies and devDependencies to run the test.

- Clone (OR) Download this repo as zip folder on to your local machine
- Navigate to project's directory on terminal and run the following commands:

Clone the repository

```bash
git clone 
```

Install dependencies

```bash
npm install
npx playwright install
```

All the dependencies from package.json would be installed in node_modules folder.

### How to write Test
* Add new spec under `e2e` folder
* Name the file as <testname>.spec.js (e.g. home.spec.js)
* Create folder under page-objects/pages as <page-name> (e.g. homePage)
* Under page folder create constant, helper and page object file.
    * <page-name>.constants.js (e.g. home.constants.js)
    * <page-name>.helper.js (e.g. home.helper.js)
    * <page-name>.po.js (e.g. home.po.js)

### How to Run Test

Run 1 tests by path

```bash
npx playwright test <fileName>.spec.ts 
```

Run all tests 

```bash
npx playwright test  - For tests only on all browsers
```

### How to use Linter

* To run eslint formatting for a single file use terminal command:
```bash
    npx eslint --fix cypress/e2e/<product>/<fileName>.ts
```

* To run eslint for dir and format all files in a given directory use command:
```bash
    npx eslint --fix cypress/e2e/<product>/.
```
