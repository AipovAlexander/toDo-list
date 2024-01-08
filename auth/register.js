import Swal from "sweetalert2";
import { arrayOfUsers } from "../constants/constants.js";
import { storage } from "../storage/storage.js";
import { UserParams } from "../constuctor/user.js";

function isKeyUnique(arr, keyToCheck, valueToCheck) {
  return arr.every((item) => item[keyToCheck] !== valueToCheck);
}

export const register = () => {
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
    Swal.fire(
      `
          Login: ${result.value.login}
          Password: ${result.value.password}
        `.trim()
    );

    if (isKeyUnique(arrayOfUsers, "userName", result.value.login)) {
      const newUser = new UserParams(result.value.login, result.value.password);
      arrayOfUsers.push(newUser);
      storage.setUsersArray(arrayOfUsers);
    } else {
      Swal.fire({
        icon: "warning",
        text: "Имя уже занято",
      });
      return;
    }
  });
};
