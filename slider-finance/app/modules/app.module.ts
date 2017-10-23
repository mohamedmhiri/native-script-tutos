import { PalmaresComponent } from './palmares/palmares.component';
import { NgModule } from '@angular/core';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SharedModule,
    NativeScriptHttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PalmaresComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
