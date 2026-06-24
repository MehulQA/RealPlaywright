import { test, expect } from '@playwright/test';
import { UserService } from '../../services/UserService';
import Ajv from 'ajv';

const ajv = new Ajv();
const validate = ajv.compile({
  type: "object",
  required: ["name", "job", "id", "createdAt"],
});

let userId: string;

test.describe('User API CRUD Flow', () => {

  // CREATE
  test('1. Create User', async () => {

    const response = await UserService.createUser({name: 'Mehul',job: 'QA Engineer'});

    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log(body);

    userId = body.id;

    // Schema validation
    const isValid = validate(body);
    expect(isValid).toBeTruthy();
  });

  /* // READ (Chained Request)
   test('2. Update User using Created ID', async () => {

    console.log('Using User ID:', userId);

    const response = await UserService.updateUser(
      userId,
      {
        name: 'Mehul',
        job: 'Senior QA Engineer'
      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log('Updated User:', body);
  }); */

   // UPDATE  // READ (Chained Request)
  test('3. Update User', async () => {

    const response = await UserService.updateUser(2, {
      name: 'Mehul Updated',
      job: 'Senior QA'
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body.name);
  });

  // DELETE
  test('4. Delete User', async () => {

    const response = await UserService.deleteUser(2);

    expect(response.status()).toBe(204);
  });

  // NEGATIVE TESTING
  test('5. Negative Test - Invalid Endpoint', async () => {

    const response = await UserService.getUser(999999);

    expect(response.status()).toBe(404);
  });

  // RETRY HANDLING EXAMPLE
  test('6. Retry Test Example', async ({}, testInfo) => {

    let attempt = 0;
    let response;

    while (attempt < 3) {
      response = await UserService.getUser(2);

      if (response.status() === 200) break;

      attempt++;
    }

    expect(response!.status()).toBe(200);

    console.log(`Test retried ${attempt} times`);
  });
 
});
