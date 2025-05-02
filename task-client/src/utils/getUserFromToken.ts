// utils/getUserFromToken.ts
import  jwt_decode from "jwt-decode";

type UserPayload = {
  name: string;
  email: string;
  role?: string;
  id?: string;
};

export const getUserFromToken = (token: string): UserPayload | null => {
  try {
    const decoded = jwt_decode<UserPayload>(token);
    return decoded;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
