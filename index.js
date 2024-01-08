import  {storage}  from "./storage/storage.js";
import {
  PRIORITIES,
  addTaskHighForm,
  addTaskLowForm,
  list,
  lowInput,
  highInput,
  dateInputHigh,
  dateInputLow,
  loginButton,
  registerButton,
  avatar,
  logo,
  arrayOfUsers,
  exitButton,
  avatar,
} from "./constants/constants.js";
import {Task} from './constuctor/task.js'
import { cleaningDom, render, findUserIndex } from "./utils/utils.js";
import Swal from "sweetalert2";
import { register } from "./auth/register.js"
import { login, autoLog, currentUser } from "./auth/auth.js";
import { showMain, showParams } from "./dark-theme/darkmode.js";
import {exitProfile} from './popup/popup.js'

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function log(e, inputType, priorityType, dateInputType) {
  try {
    e.preventDefault();

    if (inputType.value === "бэдворд") {
      inputType.value = "";
      throw new ValidationError("Значение БЭДВОРД недопустимо!");
    }
    if (inputType.value === "") {
      Swal.fire({
        icon: "warning",
        text: "Введите текст",
      });
      return;
    }
    const userIndex = findUserIndex(currentUser.login);
    let newTask = new Task(inputType.value);

    if (dateInputType.value === "") {
      newTask.delay = null;
    }

    newTask.priority = priorityType;
    newTask.endTimeForTimer = dateInputType.value;
    arrayOfUsers[userIndex].tasks.push(newTask);
    storage.setUsersArray(arrayOfUsers);

    cleaningDom();
    render();
    storage.setCurrent(list);
    inputType.value = "";
    dateInputType.value = "";
  } catch (error) {
    console.error("Произошла ошибка:", error);
    if (error instanceof ValidationError) {
      alert("Некорректные данные: " + error.message);
    }
  }
}

addTaskHighForm.addEventListener("submit", (e) => {
  log(e, highInput, PRIORITIES.HIGH, dateInputHigh);
});

addTaskLowForm.addEventListener("submit", (e) => {
  log(e, lowInput, PRIORITIES.LOW, dateInputLow);
});

document.addEventListener("DOMContentLoaded", () => {
  render();

  autoLog(currentUser.login, currentUser.password);
});

registerButton.addEventListener("click", (e) => {
  register();
});

loginButton.addEventListener("click", (e) => {
  login();
});

avatar.addEventListener("click", showParams);
logo.addEventListener("click", showMain);

exitButton.addEventListener("click", () => {
  exitProfile();
});
