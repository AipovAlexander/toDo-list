import Swal from "sweetalert2";
import {
  arrayOfUsers,
  loginButton,
  registerButton,
  userLogin,
  profileLogin,
  avatar,
} from "../constants/constants.js";
import { storage } from "../storage/storage.js";
import { cleaningDom, render } from "../utils/utils.js";

export let currentUser = storage.getCurrentUser();

export const showProfile = (username) => {
  loginButton.classList.add("hidden");
  registerButton.classList.add("hidden");
  userLogin.classList.remove("hidden");
  avatar.classList.remove("hidden");
  userLogin.textContent = `${username}`;
  profileLogin.textContent = `${username}`;
};

export const login = () => {
  Swal.fire({
    title: "Login Form",
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
          <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: "Sign in",
    confirmButtonColor: "rgba(150, 205, 119, 0.752)",
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector("#login").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!login || !password) {
        Swal.showValidationMessage(`Please enter login and password`);
      }
      return { login: login, password: password };
    },
  }).then((result) => {
    const user = arrayOfUsers.find(
      (user) => user.userName === result.value.login
    );

    if (!user) {
      Swal.fire({
        icon: "warning",
        text: "Такого пользователя не существует",
      });
      return;
    }

    if (user.password === result.value.password) {
      showProfile(result.value.login);
      Swal.fire({
        icon: "success",
        text: "Добро пожаловать в личный кабинет",
      });

      currentUser = result.value;
      cleaningDom();
      render();
      storage.setCurrentUser(currentUser);
    } else {
      Swal.fire({
        icon: "warning",
        text: "Пароль введен неверно",
      });
    }
  });
};

export const autoLog = (login, password) => {
  const user = arrayOfUsers.find((user) => user.userName === login);
  if (user.password === password) {
    showProfile(login);
  }
};
