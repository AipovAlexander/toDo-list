import { intervalToDuration } from "date-fns";
import { arrayOfUsers, checkboxes } from "../constants/constants.js";
import { changeTheme } from "../dark-theme/darkmode.js";
import { cleaningDom, render, findUserIndex } from "./utils.js";
import intervalToDuration from "date-fns/intervalToDuration";
import { currentUser } from "../auth/auth.js";
import { storage } from "../storage/storage.js";
import {getDurationText} from './getduration.js'



export let currentState = localStorage.getItem("currentState") === "true";

export function toggle(id) {
    const userIndex = findUserIndex(currentUser.login);
    arrayOfUsers[userIndex].tasks.forEach((item, index) => {
      if (item.id === id) {
        arrayOfUsers[userIndex].tasks[index].count =
          !arrayOfUsers[userIndex].tasks[index].count;
        const endTime = Date.now();
        arrayOfUsers[userIndex].tasks[index].endTime = endTime;
  
        let result = intervalToDuration({
          start: new Date(arrayOfUsers[userIndex].tasks[index].startTime),
          end: new Date(arrayOfUsers[userIndex].tasks[index].endTime),
        });
        arrayOfUsers[userIndex].tasks[index].resultTime = getDurationText(
          result.hours,
          result.minutes,
          result.seconds
        );
      }
    });
    cleaningDom();
    render();
    storage.setUsersArray(arrayOfUsers);
  }
  
  const toggleBoolean = () => {
    currentState = !currentState;
    return currentState;
  };
  
  checkboxes.addEventListener("change", () => {
    currentState = toggleBoolean();
  
    localStorage.setItem("currentState", JSON.stringify(currentState));
    changeTheme(currentState);
  });
  document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem("currentState", currentState);
    changeTheme(currentState);
  });
  