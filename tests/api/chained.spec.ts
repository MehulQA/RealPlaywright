import { test, expect } from '@playwright/test';

test('Create and Retrieve User', async ({ request }) => {

    const createResponse =
        await request.post(
            'https://reqres.in/api/users',
            {
                data: {
                    name: 'Mehul',
                    job: 'QA'
                }
            }
        );

    expect(createResponse.status()).toBe(201);

    const createBody =
        await createResponse.json();

    const id = createBody.id;

    console.log('Created User Id:', id);

    const getResponse =
        await request.get(
            'https://reqres.in/api/users/2'
        );

    expect(getResponse.status()).toBe(200);
});