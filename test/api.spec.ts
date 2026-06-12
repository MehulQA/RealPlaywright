import { test, expect } from '@playwright/test';

test('Login API Test', async ({ request }) => {

  const response = await request.post(
    'https://reqres.in/api/users',
    {


      headers: {
        'x-api-key': 'free_user_3Ez8E9FYatf6Aj8qrDVmjMCYAXm',
        'Content-Type': 'application/json'
      },

      data:  {
        "name": "Mehul",
        "job": "QA2"
      }
    }
  );

  // Validate status
  expect(response.status()).toBe(201);



  // Convert response
  const body = await response.json();

  // Print token
  console.log(body.token);
console.log(" New User is created with name: " + body.name + " and job: " + body.job);


});