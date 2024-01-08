import { format } from "date-fns";
import { deleteTask } from "../popup/popup.js";
import {toggle} from './toggle.js'
import { checkTime } from "./check-time.js";

setInterval(checkTime, 10000);

export const createElement = (
  name,
  id,
  isDone,
  resultTime,
  endTimeForTimer,
  delay
) => {
  const generalDiv = document.createElement("div");
  const newDiv = document.createElement("div");
  const newTask = document.createElement("div");
  const newCheckBox = document.createElement("input");
  const newIcon = document.createElement("img");
  const newTime = document.createElement("div");
  const deadLine = document.createElement("div");
  newCheckBox.setAttribute("type", "checkbox");
  newIcon.src = `https://icons.veryicon.com/png/o/miscellaneous/alan-ui/ios-close-2.png`;
  newDiv.className = "input-container";
  newCheckBox.className = "check";
  newTask.className = "text1";
  newTime.className = "time";
  newIcon.className = "close-icon";
  newTask.textContent = name;
  generalDiv.className = "wrapForInput";
  newTime.textContent = resultTime;
  deadLine.className = "deadline";
  newDiv.append(newCheckBox);
  newDiv.append(newTask);
  newDiv.append(newIcon);
  generalDiv.append(deadLine);
  generalDiv.append(newDiv);
  generalDiv.append(newTime);

  if (!endTimeForTimer) {
    deadLine.className = "hidden";
  } else {
    let formattedTime = new Date(endTimeForTimer);
    let formatTime = format(formattedTime, "dd-LL HH:mm");
    deadLine.textContent = `Выполнить до ${formatTime}`;
  }

  if (delay === true) {
    generalDiv.style.boxShadow = "0 15px 30px rgba(212, 107, 32, 0.392)";
    newCheckBox.disabled = true;
  }
  if (isDone === true) {
    newCheckBox.checked = true;
    generalDiv.style.boxShadow = "0 15px 30px rgba(38, 231, 21, 0.15)";
    newCheckBox.disabled = true;
  }

  newCheckBox.addEventListener("click", () => {
    toggle(id);
  });

  newIcon.addEventListener("click", (e) => {
    deleteTask(newTask);
  });
  return generalDiv;
};
