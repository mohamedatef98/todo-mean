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
      delay: 1000
    })
  }
}
