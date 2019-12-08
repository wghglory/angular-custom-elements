import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
  host: {
    '[@state]': 'state'
  },
  animations: [
    trigger('state', [
      state('opened', style({ transform: 'translateY(0%)' })),
      state('void, closed', style({ transform: 'translateY(100%)', opacity: 0 })),
      transition('* => *', animate('100ms ease-in'))
    ])
  ]
})
export class PopupComponent {
  public state: 'opened' | 'closed' = 'closed';

  @Input()
  set message(msg: string) {
    this._message = msg;
    this.state = 'opened';
  }
  get message(): string {
    return this._message;
  }
  private _message: string;

  @Output()
  closed = new EventEmitter();
}
