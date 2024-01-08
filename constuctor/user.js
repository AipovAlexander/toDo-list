import { arrayOfUsers } from "../constants/constants.js";
import { storage } from "../storage/storage.js";

export function UserParams(userName, password) {
  this.userName = userName;
  this.password = password;
  this.theme = false;
  this.userImage = null;
  this.tasks = [];
  storage.setUsersArray(arrayOfUsers);
}
