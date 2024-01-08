import { STATUSSES, list } from "../constants/constants.js";
import { storage } from "../storage/storage.js";

export function Task(name) {
  this.nameTask = name;
  this.status = STATUSSES.TODO;
  this.count = false;
  this.id = Math.floor(Math.random() * 501);
  this.startTime = Date.now();
  this.endTime = null;
  this.resultTime = null;
  this.endTimeForTimer = null;
  this.delay = false;
  storage.setCurrent(list);
}
