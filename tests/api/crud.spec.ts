import { test, expect } from '@playwright/test';
import { UserService } from '../../services/UserService';

test.describe('CRUD Operations', () => {

  test('Create User', async ({ request }) => {
    const userService = new UserService(request);

    const response = await userService.createUser(
      'Mehul',
      'QA Engineer'
    );

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.name).toBe('Mehul');
    expect(responseBody.job).toBe('QA Engineer');
    expect(responseBody.id).toBeTruthy();
    // debug logs (use the existing response if needed)
    console.log('Create User - Status:', response.status());
    // response body already consumed via response.json()

  });

  test('Get User', async ({ request }) => {
    const userService = new UserService(request);

    const response = await userService.getUser(2);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.email).toContain('@');
  });

  /*test('Update User', async ({ request }) => {
    const userService = new UserService(request);

    const response = await userService.updateUser(2);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.name).toBe('Mehul Updated');
    expect(responseBody.job).toBe('Senior QA Engineer');
    expect(responseBody.updatedAt).toBeTruthy();
  });

  test('Delete User', async ({ request }) => {
    const userService = new UserService(request);

    const response = await userService.deleteUser(2);

    expect(response.status()).toBe(204);
  });*/
});