# Amazon Automated Testing with Playwright

Welcome to the Amazon automated testing project using Playwright. This README will guide you through the setup, test creation, and execution process.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following prerequisites:

1. Node.js: Download and install Node.js, which you can find at [nodejs.org](https://nodejs.org/).

2. IDE: Download and install Visual Code or IntelliJ IDEA

### Installation

To set up the project and its dependencies, follow these steps:

1. Clone or Download the Repository:

   - Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/MOrekhovskyi/hometask
```
 Alternatively, you can download the repository as a zip folder and extract it on your local machine.

2.  Navigate to the Project Directory:

   Open your terminal and navigate to the project's root directory.

3.  Install Dependencies:

   Run the following commands to install project dependencies and Playwright:

```bash
npm install
npx playwright install
```

This will install all the required dependencies in the node_modules folder.

## How to Write Tests

To create automated tests for the Amazon project, follow these steps:

1. Add a New Test Specification:

   - Create a new test specification file under the 'e2e' folder.
   - Name the file following the format: <testname>.spec.js (e.g., 'home.spec.js').

2. Create Page Objects:

   - For each test, create a folder under the 'page-objects/pages' directory. Name it as <page-name> (e.g., 'homePage').

   This organization helps maintain clean and structured test files.

## How to Run Tests

You can execute your tests using Playwright with the following commands:

- Run a Single Test by Path:

   To run a specific test file, use the following command (replace <fileName> with your test file name):
```bash
npx playwright test <fileName>.spec.ts 
```

- Run All Tests:

   To run all tests on all available browsers, simply use:

```bash
npx playwright test 
```

## How to Use Linter

To maintain code quality and formatting, we recommend using ESLint. Here's how to utilize it:

- Run ESLint for a Single File:

   To apply ESLint formatting to a single file, execute the following terminal command (replace <product> and <fileName> with your specific values):

```bash
    npx eslint --fix Amazon/e2e/<product>/<fileName>.ts
```

- Run ESLint for a Directory:

   To run ESLint for an entire directory and format all files within it, use the following command (replace <product> with the appropriate directory):

```bash
    npx eslint --fix Amazon/e2e/<product>/.
```

These instructions should help you get started with automated testing for your Amazon-related project using Playwright. If you encounter any issues or have questions, please refer to the documentation or reach out to me for support.
