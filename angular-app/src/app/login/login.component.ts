import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginComponent implements OnInit {
  constructor() {}

  @Input() username: string;
  @Input() password: string;

  @Output() login = new EventEmitter<string>();

  submit() {
    this.login.emit(this.username);
  }

  ngOnInit() {}
}
