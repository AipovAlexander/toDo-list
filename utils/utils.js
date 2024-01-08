import {arrayOfUsers, highBlock, lowBlock} from '../constants/constants.js'
import {currentUser} from '../auth/auth.js'
import {createElement} from './create-message.js'



export const findUserIndex = (userNameToFind) => {
  for (let i = 0; i < arrayOfUsers.length; i++) {
    if (arrayOfUsers[i].userName === userNameToFind) {
      return i;
    }
  }
  return -1;
};

export const cleaningDom = () => {
  let obj = document.querySelectorAll(".wrapForInput");
  for (let i = 0; i < obj.length; i++) {
    obj[i].remove();
  }
};

export const render = () => {
  const userIndex = findUserIndex(currentUser.login);
  arrayOfUsers[userIndex].tasks.sort((a, b) => {
    if (a.count && !b.count) {
      return 1;
    } else if (!a.count && b.count) {
      return -1;
    }
    return 0;
  });

  arrayOfUsers[userIndex].tasks.forEach((Task) => {
    if (Task.priority === "high") {
      highBlock.append(
        createElement(
          Task.nameTask,
          Task.id,
          Task.count,
          Task.resultTime,
          Task.endTimeForTimer,
          Task.delay
        )
      );
    } else if (Task.priority === "low") {
      lowBlock.append(
        createElement(
          Task.nameTask,
          Task.id,
          Task.count,
          Task.resultTime,
          Task.endTimeForTimer,
          Task.delay
        )
      );
    }
  });
};

