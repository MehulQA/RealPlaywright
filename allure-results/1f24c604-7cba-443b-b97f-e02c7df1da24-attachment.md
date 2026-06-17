# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\schema.spec.ts >> Validate User Schema
- Location: tests\api\schema.spec.ts:3:5

# Error details

```
Error: expect(received).toHaveProperty(path)

Matcher error: received value must not be null nor undefined

Received has value: undefined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Validate User Schema', async ({ request }) => {
  4  | 
  5  |     const response =
  6  |         await request.get(
  7  |             'https://reqres.in/api/users/2'
  8  |         );
  9  | 
  10 |     const body = await response.json();
  11 | 
> 12 |     expect(body.data).toHaveProperty('id');
     |                       ^ Error: expect(received).toHaveProperty(path)
  13 |     expect(body.data).toHaveProperty('email');
  14 |     expect(body.data).toHaveProperty('first_name');
  15 |     expect(body.data).toHaveProperty('last_name');
  16 | });
```