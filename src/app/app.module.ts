import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AboutComponent} from './components/about/about.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {ServicesComponent} from './components/services/services.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContactComponent} from './components/contact/contact.component';
import {NavComponent} from './components/nav/nav.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ContactService} from "./components/contact/contact.service";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    ServicesComponent,
    PortfolioComponent,
    FooterComponent,
    ContactComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
