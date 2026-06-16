import { test, expect } from '@playwright/test';

test('Validate User Schema', async ({ request }) => {

    const response =
        await request.get(
            'https://reqres.in/api/users/2'
        );

    const body = await response.json();

    expect(body.data).toHaveProperty('id');
    expect(body.data).toHaveProperty('email');
    expect(body.data).toHaveProperty('first_name');
    expect(body.data).toHaveProperty('last_name');
});