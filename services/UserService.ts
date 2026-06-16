 
 import { APIRequestContext, APIResponse } from '@playwright/test';

export class UserService {
  constructor(private request: APIRequestContext) {}
 
 async createUser(name: string, job: string) {
  return await this.request.post('/users', {
    headers: {
      'x-api-key': 'free_user_3Ez8E9FYatf6Aj8qrDVmjMCYAXm',
        'Content-Type': 'application/json'
    },
    data: { "name": "Mehul",
        "job": "QA2" }

        

  });
}

async getUser(id: number) {
  return await this.request.get(`/users/${id}`, {
    headers: {
      'x-api-key': 'free_user_3Ez8E9FYatf6Aj8qrDVmjMCYAXm',
        'Content-Type': 'application/json'
    }
  });
}

async updateUser(id: number, name: string, job: string) {
  return await this.request.put(`/users/${id}`, {
    headers: {
      'x-api-key': 'free_user_3Ez8E9FYatf6Aj8qrDVmjMCYAXm',
        'Content-Type': 'application/json'
    },
    data: { name, job }
  });
}

async deleteUser(id: number) {
  return await this.request.delete(`/users/${id}`, {
    headers: {
      'x-api-key': 'free_user_3Ez8E9FYatf6Aj8qrDVmjMCYAXm',
        'Content-Type': 'application/json'
    }
  });
}

}
