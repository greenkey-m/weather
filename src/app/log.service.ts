import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logmessages: string[] = [];

  constructor() { }

  add(message: string) {
    this.logmessages.push(message);
  }

  clear() {
    this.logmessages = [];
  }

}
