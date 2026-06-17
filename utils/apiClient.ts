import { request } from '@playwright/test';

export class ApiClient {
  static async getRequest() {
    return await request.newContext({
      baseURL: 'https://reqres.in',
      extraHTTPHeaders: {
        'x-api-key': 'free_user_3Ez8E9FYatf6Aj8qrDVmjMCYAXm',
        'Content-Type': 'application/json',
      },
    });
  }
}