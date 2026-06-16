# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\crud.spec.ts >> CRUD Operations >> Update User
- Location: tests\api\crud.spec.ts:36:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 405
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
  21 |   });
  22 | 
  23 |   test('Get User', async ({ request }) => {
  24 |     const userService = new UserService(request);
  25 | 
  26 |     const response = await userService.getUser(2);
  27 | 
  28 |     expect(response.status()).toBe(200);
  29 | 
  30 |     const responseBody = await response.json();
  31 | 
  32 |     expect(responseBody.data.id).toBe(2);
  33 |     expect(responseBody.data.email).toContain('@');
  34 |   });
  35 | 
  36 |   test('Update User', async ({ request }) => {
  37 |     const userService = new UserService(request);
  38 | 
  39 |     const response = await userService.updateUser(2);
  40 | 
> 41 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  42 | 
  43 |     const responseBody = await response.json();
  44 | 
  45 |     expect(responseBody.name).toBe('Mehul Updated');
  46 |     expect(responseBody.job).toBe('Senior QA Engineer');
  47 |     expect(responseBody.updatedAt).toBeTruthy();
  48 |   });
  49 | 
  50 |   /*test('Delete User', async ({ request }) => {
  51 |     const userService = new UserService(request);
  52 | 
  53 |     const response = await userService.deleteUser(2);
  54 | 
  55 |     expect(response.status()).toBe(204);
  56 |   });*/
  57 | });
```