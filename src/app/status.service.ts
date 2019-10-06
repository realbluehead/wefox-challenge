import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  public message = new EventEmitter<any>();

  constructor() {
    this.message.emit('');
  }
}
