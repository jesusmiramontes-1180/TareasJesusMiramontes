import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { EducactionComponent } from './pages/educaction/educaction.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LanguagesComponent } from './pages/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    EducactionComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
