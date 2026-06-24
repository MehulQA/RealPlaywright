import { test, expect } from '@playwright/test';

test('User Not Found', async ({ request }) => {
    const response = await request.get(
        'https://reqres.in/api/users/999999999'


        
    );

    expect(response.status()).toBe(401);
});