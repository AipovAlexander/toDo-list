import {
  highBlock,
  lowBlock,
  profile,
  loginButton,
} from "../constants/constants.js";

const body = document.querySelector("body");
const headerTitle = document.querySelector(".header__title");
const linksAndButtons = document.querySelectorAll("a, button");
const toggle1 = document.querySelector(".toggle");
const item = document.querySelector(".item");
const imgs = document.querySelectorAll(".img");
const deadline = document.querySelectorAll(".deadline");


const textInputs = document.querySelectorAll(
  'input[type="text"], input[type="datetime-local"]'
);
const titles = document.querySelectorAll(".title");
const containers = document.querySelectorAll(".container");

export const showParams = () => {
  lowBlock.classList = "hidden";
  highBlock.classList = "hidden";
  profile.classList = "profile";
};

export const showMain = () => {
  profile.classList = "hidden";
  highBlock.classList = "block";
  lowBlock.classList = "block";
};

export const changeTheme = (currentState) => {
  const elementsToStyle = document.querySelectorAll(
    'body, .title, .time, .container, .container input, .container button, .input-container input[type="text"], .input-container input[type="checkbox"], .wrapForInput, .img, .header, .header__body, .profile, .profile__userinfo, .profile__avatar, .profile__body, .flexbody, .profile__username, .profile__editbutton, .profile__links, .settings, .settings__body, .settings__title, .deadline'
  );

  if (currentState) {
    body.style.backgroundColor = "#1a1a1a";
    body.style.color = "#fff";

    headerTitle.style.color = "#fff";

    linksAndButtons.forEach((element) => {
      element.style.color = "#fff";
      element.style.backgroundColor = "#333";
      element.style.border = "none";
    });

    toggle1.style.backgroundColor = "#333";
    toggle1.style.borderColor = "#666";

    item.style.backgroundColor = "#333";

    imgs.forEach((img) => {
      img.style.filter = "invert(1)";
    });

    textInputs.forEach((input) => {
      input.style.backgroundColor = "#333";
      input.style.color = "#fff";
    });

    titles.forEach((title) => {
      title.style.color = "#fff";
    });

    containers.forEach((container) => {
      container.style.backgroundColor = "#333";
    });

    deadline.forEach((title) => {
      title.style.color = "#fff";
    });

    const containerImgs = document.querySelectorAll(".container .img");
    containerImgs.forEach((img) => {
      img.style.filter = "invert(1)";
    });
  } else {
    elementsToStyle.forEach((element) => {
      headerTitle.style.color = "black";
      element.style.backgroundColor = "";
      element.style.color = "";
      element.style.border = "";
      toggle1.style.backgroundColor = "";
      toggle1.style.borderColor = "";
      loginButton.style.backgroundColor = "";
    });
  }
  localStorage.setItem("currentState", JSON.stringify(currentState));
};
