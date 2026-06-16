import { test, expect } from '@playwright/test';

test.describe.configure({
    retries: 2
});

test.describe('Retry Handling', () => {

    test('Retry Failed Request', async ({ request }) => {

        const response = await request.get(
            'https://reqres.in/api/users/2'
        );

        expect(response.status()).toBe(200);
    });

});