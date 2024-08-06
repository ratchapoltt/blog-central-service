# BlogCentral Service

This service is responsible for managing the blog posts and comments.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Scripts](#scripts)
  - [Build the application](#build-the-application)
  - [Running the application](#running-the-application)
  - [Test the application](#test-the-application)
  - [Linter and Formatter the code](#linter-and-formatter-the-code)
- [Authors](#authors)

## Getting Started

These instructions will get you a copy of the project up and running
on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

1. Visual Studio Code - [Download](https://code.visualstudio.com/)
2. Node.js (v20.15.0) - [Download](https://nodejs.org/en/blog/release/v20.15.0)

### Installing

A step by step series of examples that tell you how to get a development env running.

1. Install required extensions for Visual Studio Code

   Click on the install button for installing the required extensions.

   ![Required extensions](.docs/images/required-extensions.png)

2. Install the dependencies

   Run the following command to install the dependencies:

   ```bash
   npm install
   ```

## Scripts

### Build the application

```bash
# Local mode
npm run build

# Development mode
npm run build:development

# Sit mode
npm run build:sit

# Uat mode
npm run build:uat

# Production mode
npm run build:production

# Test mode
npm run build:test

```

### Running the application

```bash
# Local mode
npm run start

# Local mode with debug
npm run start:debug

# Development mode
npm run start:development

# Development mode with debug
npm run start:development-debug
```

### Test the application

```bash
# All tests
npm run test

# Unit test
npm run test:unit

# Unit test with watch mode
npm run test:unit-watch

# Unit test with coverage
npm run test:unit-coverage

# E2E test
npm run test:e2e
```

### Linter and Formatter the code

```bash
# Check the code
npm run lint

# Fix the code
npm run lint:fix
```

## Authors

- Ratchapol Thongta - [@ratchapoltt](https://www.github.com/ratchapoltt)
