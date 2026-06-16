# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\crud.spec.ts >> CRUD Operations >> Get User
- Location: tests\api\crud.spec.ts:27:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { UserService } from '../../services/UserService';
  3  | 
  4  | test.describe('CRUD Operations', () => {
  5  | 
  6  |   test('Create User', async ({ request }) => {
  7  |     const userService = new UserService(request);
  8  | 
  9  |     const response = await userService.createUser(
  10 |       'Mehul',
  11 |       'QA Engineer'
  12 |     );
  13 | 
  14 |     expect(response.status()).toBe(201);
  15 | 
  16 |     const responseBody = await response.json();
  17 | 
  18 |     expect(responseBody.name).toBe('Mehul');
  19 |     expect(responseBody.job).toBe('QA Engineer');
  20 |     expect(responseBody.id).toBeTruthy();
  21 |     // debug logs (use the existing response if needed)
  22 |     console.log('Create User - Status:', response.status());
  23 |     // response body already consumed via response.json()
  24 | 
  25 |   });
  26 | 
  27 |   test('Get User', async ({ request }) => {
  28 |     const userService = new UserService(request);
  29 | 
  30 |     const response = await userService.getUser(2);
  31 | 
> 32 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  33 | 
  34 |     const responseBody = await response.json();
  35 | 
  36 |     expect(responseBody.data.id).toBe(2);
  37 |     expect(responseBody.data.email).toContain('@');
  38 |   });
  39 | 
  40 |   /*test('Update User', async ({ request }) => {
  41 |     const userService = new UserService(request);
  42 | 
  43 |     const response = await userService.updateUser(2);
  44 | 
  45 |     expect(response.status()).toBe(200);
  46 | 
  47 |     const responseBody = await response.json();
  48 | 
  49 |     expect(responseBody.name).toBe('Mehul Updated');
  50 |     expect(responseBody.job).toBe('Senior QA Engineer');
  51 |     expect(responseBody.updatedAt).toBeTruthy();
  52 |   });
  53 | 
  54 |   test('Delete User', async ({ request }) => {
  55 |     const userService = new UserService(request);
  56 | 
  57 |     const response = await userService.deleteUser(2);
  58 | 
  59 |     expect(response.status()).toBe(204);
  60 |   });*/
  61 | });
```