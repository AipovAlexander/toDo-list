import Swal from "sweetalert2";
import { storage } from "../storage/storage.js";
import {
  arrayOfUsers,
  loginButton,
  registerButton,
  userLogin,
  avatar,
  profileLogin,
} from "../constants/constants.js";
import { cleaningDom, render, findUserIndex } from "../utils/utils.js";
import { currentUser } from "../auth/auth.js";
import { showMain } from "../dark-theme/darkmode.js";

export const deleteTask = (task) => {
  const userIndex = findUserIndex(currentUser.login);
  const findIndex = (nameTask) => {
    const index = arrayOfUsers[userIndex].tasks.findIndex(
      (ind) => ind.nameTask === nameTask
    );
    return index;
  };
  const TaskName = task.textContent;
  let ind = findIndex(TaskName);
  Swal.fire({
    title: "Вы уверены?",
    text: "Задачу будет невозможно вернуть!",
    icon: "warning",
    iconColor: "#FA8072	",
    background: "#fff",
    showCancelButton: true,
    confirmButtonColor: "#FA8072",
    cancelButtonColor: "rgba(86, 204, 18, 0.826)",
    confirmButtonText: "Да, удалить",
    cancelButtonText: "Нет, оставить",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Удалено!", "Задача была удалена.", "success");
      if (ind !== -1) {
        arrayOfUsers[userIndex].tasks.splice(ind, 1);
        cleaningDom();
        render();
      }
      storage.setUsersArray(arrayOfUsers);
    }
  });
};

export const exitProfile = () => {
  Swal.fire({
    title: "Выход",
    text: "Вы уверены, что хотите выйти из личного кабинета?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#FA8072",
    cancelButtonColor: "rgba(86, 204, 18, 0.826)",
    confirmButtonText: "Да",
    cancelButtonText: "Нет",
    iconColor: "#FA8072",
  }).then((result) => {
    if (result.isConfirmed) {
      loginButton.classList.remove("hidden");
      registerButton.classList.remove("hidden");
      userLogin.classList.add("hidden");
      avatar.classList.add("hidden");
      userLogin.textContent = ``;
      profileLogin.textContent = ``;
      localStorage.removeItem("currentUser");
      showMain();
      cleaningDom();
    }
  });
};
