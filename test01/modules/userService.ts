import { User } from "../types";

const users: User[] = [];

export const addUser = (user: User) => users.push(user);

export const getUserById = (id: number) => users[id];

export const removeUser = (id: number) =>
  users.filter((unused, index) => index !== id); // return all users exept false one