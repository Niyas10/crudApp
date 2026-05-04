// TypeScript type definitions and interfaces

export interface Product {
  _id?: string;
  name: string;
  price: number;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  _id?: string;
  email: string;
  password: string;
  name: string;
  createdAt?: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
