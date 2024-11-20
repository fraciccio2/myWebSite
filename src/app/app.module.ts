import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {EducationComponent} from './components/education/education.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
