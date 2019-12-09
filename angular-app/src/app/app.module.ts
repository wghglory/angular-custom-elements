import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup/popup.service';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, PopupComponent, LoginComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule, FormsModule, AppRoutingModule],
  providers: [PopupService],
  // bootstrap: [AppComponent],
  entryComponents: [PopupComponent, LoginComponent, AppComponent] // to use custom elements, we have to add them here
})
export class AppModule {
  constructor(private injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    const LoginElement = createCustomElement(LoginComponent, { injector });

    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
    customElements.define('login-element', LoginElement);
  }

  ngDoBootstrap() {
    const AppElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-root', AppElement);
  }
}
