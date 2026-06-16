import { test, expect } from '@playwright/test';

test.describe('Timeout Handling', () => {

    test('Validate API responds within timeout', async ({ request }) => {

        const response = await request.get(
            'https://reqres.in/api/users?page=2',
            {
                timeout: 10000
            }
        );

        expect(response.status()).toBe(200);
    });

});