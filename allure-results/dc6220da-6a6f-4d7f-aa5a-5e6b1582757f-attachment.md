# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\retry.spec.ts >> Retry Handling >> Retry Failed Request
- Location: tests\api\retry.spec.ts:9:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe.configure({
  4  |     retries: 2
  5  | });
  6  | 
  7  | test.describe('Retry Handling', () => {
  8  | 
  9  |     test('Retry Failed Request', async ({ request }) => {
  10 | 
  11 |         const response = await request.get(
  12 |             'https://reqres.in/api/users/2'
  13 |         );
  14 | 
> 15 |         expect(response.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  16 |     });
  17 | 
  18 | });
```