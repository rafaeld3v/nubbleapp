import { userAdapter } from "./userAdapter";
import { userApi } from "./userApi";
import { User } from "./userTypes";

async function getById(id: number): Promise<User> {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const userAPI = await userApi.getById(id.toString());
  return userAdapter.toUser(userAPI);
}

export const userService = {
  getById,
};
