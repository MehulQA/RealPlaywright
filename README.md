# Playwright Automation Framework

## Overview

This repository contains UI and API automation testing developed using Playwright and TypeScript.

### Key Features

* UI Automation using Playwright
* API Automation using Playwright Request Context
* Page Object Model (POM)
* Service Layer Architecture for API Testing
* Responsive Testing
* CRUD Operations
* Schema Validation using AJV
* Chained API Requests
* Retry & Timeout Handling
* HTML Reporting
* GitHub Actions CI/CD Integration

---

# Tech Stack

* Playwright
* TypeScript
* Node.js
* AJV
* GitHub Actions

---

# Project Structure

```text
KRISHNAAPI
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── auth
├── config
├── pages
├── services
├── testdata
├── tests
│   ├── api
│   └── ui
│
├── utils
├── reports
├── screenshots
├── test-results
├── playwright.config.ts
└── package.json
```

---

# Framework Architecture

## UI Automation Architecture

```text
Test Specification
        │
        ▼
   Page Object
        │
        ▼
     Locators
        │
        ▼
 Browser Actions
```

### Example

```text
login.spec.ts
      │
      ▼
LoginPage.ts
      │
      ▼
Username
Password
Login Button
```

---

## API Automation Architecture

```text
Test Specification
        │
        ▼
   Service Layer
        │
        ▼
   API Endpoint
        │
        ▼
 Response Validation
```

### Example

```text
crud.spec.ts
      │
      ▼
UserService.ts
      │
      ▼
ReqRes API
      │
      ▼
Assertions
```

---

# Setup Instructions

## Clone Repository

```bash
git clone <repository-url>
```

## Install Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

---

# Execution Commands

## Run All Tests

```bash
npx playwright test
```

## Run UI Tests

```bash
npx playwright test tests/ui
```

## Run API Tests

```bash
npx playwright test tests/api
```

## Run Specific Test File

```bash
npx playwright test tests/ui/login.spec.ts
```

## Run Chrome Browser

```bash
npx playwright test --project="Google Chrome"
```

## Run Chrome Headed Mode

```bash
npx playwright test --project="Google Chrome" --headed
```

## Run Chromium

```bash
npx playwright test --project=chromium
```

## Run Firefox

```bash
npx playwright test --project=firefox
```

## Run Responsive Test

```bash
npx playwright test tests/ui/responsive.spec.ts
```

## Run Debug Mode

```bash
npx playwright test --debug
```

## Run Playwright UI Mode

```bash
npx playwright test --ui
```

---

# API Test Coverage

## CRUD Operations

* Create User
* Retrieve User
* Update User
* Delete User

## Schema Validation

* Response schema validation using AJV

## Chained Requests

* Create User
* Capture User ID
* Retrieve User Details

## Negative Testing

* Invalid Endpoint Validation
* Invalid User Validation
* Unauthorized Access Validation

## Retry Handling

* Retry failed requests automatically

## Timeout Handling

* Validate API response time

---

# UI Test Coverage

## Login Module

* Valid Login
* Invalid Login
* Locked User Validation
* Error Message Validation

## Product Module

* Product Listing Validation
* Add Product to Cart
* Remove Product from Cart

## Checkout Module

* Complete Checkout Flow
* Order Confirmation Validation

## Responsive Module

* Desktop View Validation
* Mobile View Validation

---

# Reports

## Generate HTML Report

```bash
npx playwright show-report
```

Report Location:

```text
playwright-report/index.html
```

## Allure Report

Generate Test Results:

```bash
npx playwright test
```

Generate Allure Report:

```bash
allure serve allure-results
```

---

# CI/CD Integration

GitHub Actions pipeline is configured using:

```text
.github/workflows/playwright.yml
```

### Pipeline Flow

1. Checkout Repository
2. Setup Node.js
3. Install Dependencies
4. Install Playwright Browsers
5. Execute Tests
6. Generate HTML Report
7. Upload Test Artifacts

---

# Sample Test Results

## UI Execution

```text
Passed : 4
Failed : 0
```

## API Execution

```text
Passed : 18
Failed : 0
```

---

# Future Enhancements

* Playwright Fixtures
* Environment-Based Execution
* Data-Driven Testing
* Parallel Execution Optimization
* Docker Integration
* Jenkins Integration

---

