# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\negative.spec.ts >> User Not Found
- Location: tests\api\negative.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('User Not Found', async ({ request }) => {
  4  | 
  5  |     const response =
  6  |         await request.get(
  7  |             'https://reqres.in/api/users/999'
  8  |         );
  9  | 
> 10 |     expect(response.status()).toBe(404);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  11 | });
```