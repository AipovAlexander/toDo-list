export class Storage {
  constructor(storageType = "local") {
    this.storageType =
      storageType === "session" ? sessionStorage : localStorage;
  }
  getCurrent() {
    return JSON.parse(this.storageType.getItem("task")) || [];
  }
  setCurrent(favorites) {
    this.storageType.setItem("task", JSON.stringify(favorites));
  }
  getUsersArray() {
    return JSON.parse(this.storageType.getItem("user")) || [];
  }
  setUsersArray(usersArray) {
    this.storageType.setItem("user", JSON.stringify(usersArray));
  }
  getCurrentUser() {
    const userJSON = this.storageType.getItem("currentUser");
    return userJSON ? JSON.parse(userJSON) : null;
  }

  setCurrentUser(user) {
    this.storageType.setItem("currentUser", JSON.stringify(user));
  }
  clearTask() {
    this.storageType.removeItem("task");
  }

  isStorageEmpty() {
    return this.storageType.length === 0;
  }
}

export const storage = new Storage();
