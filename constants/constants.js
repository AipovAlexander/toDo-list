import { storage } from "../storage/storage.js";

export const PRIORITIES = {
  LOW: "low",
  HIGH: "high",
};
export const STATUSSES = {
  TODO: "To Do",
  DONE: "Done",
};
export const addTaskHighForm = document.querySelector(
  ".highblock__input-container"
);
export const addTaskLowForm = document.querySelector(
  ".lowblock__input-container"
);
export const highInput = document.querySelector("#highblock__input");
export const lowInput = document.querySelector("#lowblock__input");
export const highBlock = document.querySelector(".highblock");
export const lowBlock = document.querySelector(".lowblock");
export const dateInputHigh = document.querySelector(".input");
export const dateInputLow = document.querySelector(".inputlow");
export const list = storage.getCurrent();
export const arrayOfUsers = storage.getUsersArray();
export const loginButton = document.querySelector(".login");
export const registerButton = document.querySelector(".register");
export const avatar = document.querySelector(".avatar");
export const profile = document.querySelector(".profile");
export const wrapper = document.querySelector(".body");
export const logo = document.querySelector(".header__title");
export const userLogin = document.querySelector(".header__login");
export const profileLogin = document.querySelector(".profile__username");
export const exitButton = document.querySelector(".button__exit");
export const checkboxes = document.getElementById("switch");
