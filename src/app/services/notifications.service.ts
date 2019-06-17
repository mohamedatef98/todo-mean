import {Injectable} from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

type messageType = 'success' | 'error' | 'info';

@Injectable({
  providedIn: 'root'
})
export class NotificaionsService{
  getPNotify() {
    PNotifyButtons;
    return PNotify;
  }

  pushNotification(type: messageType, text: string){
    this.getPNotify()[type]({
      text,
      delay: 2000,
      width: '200px'
    })
  }

  pushSuccess(text: string){
    this.pushNotification('success', text);
  }

  pushError(...text: string[]){
    this.pushNotification('error', `Something went wrong, ${text.join(', ')}`);
  }

  pushInfo(text: string){
    this.pushNotification('info', text);
  }
}
