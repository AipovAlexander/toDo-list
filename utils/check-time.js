import formatISO from 'date-fns/formatISO';
import { storage } from '../storage/storage.js';
import { findUserIndex } from './utils.js';
import { arrayOfUsers } from '../constants/constants.js';
import { cleaningDom, render } from './utils.js';
import { currentUser } from '../auth/auth.js';

export const checkTime = () => {
    const userIndex = findUserIndex(currentUser.login);
    let curDate = Date.now();
    let normalDate = formatISO(curDate);
    arrayOfUsers[userIndex].tasks.forEach((task) => {
      if (task.delay === null) {
        return;
      }
  
      if (task.endTimeForTimer < normalDate) {
        task.delay = true;
        cleaningDom();
        render();
        storage.setUsersArray(arrayOfUsers);
      } else if (task.delay === null) {
        task.delay = false;
      }
    });
  };
  