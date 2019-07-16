import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './home.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HelloComponent, TooltipDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
