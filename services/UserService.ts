import { ApiClient } from '../utils/apiClient';

export class UserService {

  // CREATE
  static async createUser(payload: any) {
    const request = await ApiClient.getRequest();

    return await request.post('/api/users', {data: payload});
  }

  // READ
  static async getUser(id: number) {
    const request = await ApiClient.getRequest();

    return await request.get(`/api/users/${id}`);
  }

  // UPDATE
  static async updateUser(id: number, payload: any) {
    const request = await ApiClient.getRequest();

    return await request.put(`/api/users/${id}`, {
      data: payload
    });
  }

  // DELETE
  static async deleteUser(id: number) {
    const request = await ApiClient.getRequest();

    return await request.delete(`/api/users/${id}`);
  }
}




