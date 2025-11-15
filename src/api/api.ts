// src/api/api.ts
import axios from "axios";

// const API_BASE_URL = "https://wekonnects.vercel.app/api/v1" ;
const API_BASE_URL = "http://localhost:5000/api/v1" ;

// ---------- AXIOS BASE INSTANCE ----------
const api = axios.create({  
  baseURL: API_BASE_URL,
  withCredentials: true, // allows cookies for refresh-token
  // headers: {
    
  //   "Content-Type": "application/json",
  // },
});

// ---------- TOKEN HELPER ----------
export const getToken = () => localStorage.getItem("token");

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

// ---------- CENTRAL API METHODS ----------
export const apiGet = (url: string) => api.get(url);
export const apiPost = (url: string, data: any) => api.post(url, data);
export const apiPatch = (url: string, data: any) => api.patch(url, data);
export const apiDelete = (url: string) => api.delete(url);

// ---------- AUTH APIS ----------
export const loginUser = (data: { email: string; password: string }) =>
  apiPost("/auth/login", data);

export const registerUser = (data: any) =>
  apiPost("/auth/register", data);

export const fetchMyProfile = () => apiGet("/users/me");

export const logoutUser = () => apiPost("/auth/logout", {});

// ---------- CATEGORY APIS ----------
export const getAllCategories = () => apiGet("/categories");

export const createCategory = (data: FormData) => {
  return api.post("/categories/create", data);
};
export const updateCategory = (id: string, data: any) =>
  apiPatch(`/categories/${id}`, data);

// ---------- USERS (ADMIN) ----------
export const getAllUsers = () => apiGet("/users/all-users");
// UPDATE user status
export const updateUserStatus = (id: string, data: any) =>
  apiPatch(`/users/update-user/${id}`, data);
// ---------- STATE APIS ----------
export const createState = (data: any) => apiPost("/states", data);
export const getStates = () => apiGet("/states");
export const updateState = (id: string, data: any) =>
  apiPatch(`/states/${id}`, data);

// ---------- CITY APIS ----------
export const createCity = (data: any) => apiPost("/cities", data);
export const getCities = () => apiGet("/cities");

// ---------- BUSINESS APIS ----------
export const createBusiness = (data: any) => apiPost("/business", data);
export const getBusinessList = () => apiGet("/business");

// ---------- EVENTS ----------
export const createEvent = (data: any) => apiPost("/events", data);

// ---------- GROUPS ----------
export const createGroup = (data: any) => apiPost("/groups/create", data);
export const getGroups = () => apiGet("/groups");

export default api;
