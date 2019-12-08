import { Component } from '@angular/core';

import { PopupService } from './popup/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public popupService: PopupService) {}

  onLogin(model: { username: string; password: string }) {
    alert(`${model.username} is login...`);
  }
}
