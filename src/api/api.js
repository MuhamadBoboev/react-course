import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "528390f1-0c9a-4a84-b52f-644f9380ca16",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});
export const usersApi = {
  getUsers(pageSize, totalUserCount) {
    return instance.get(`users?page=${pageSize}&count=${totalUserCount}`);
  },
};
export const authApi = {
  getAuthApi() {
    return instance.get(`auth/me`);
  },
};
export const securityApi = {
  getUsers(pageSize, totalUserCount) {
    return instance.get(`users?page=${pageSize}&count=${totalUserCount}`);
  },
};
export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};
export const followingApi = {
  deleteFollowing(userId) {
    return instance.delete(`follow/${userId}`);
  },
  postFollowing(userId) {
    return instance.post(`follow/${userId}`, {});
  },
};
