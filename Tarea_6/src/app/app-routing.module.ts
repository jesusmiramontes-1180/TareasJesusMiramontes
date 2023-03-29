import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducactionComponent } from './pages/educaction/educaction.component';
import { IndexComponent } from './pages/index/index.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path : "", component : IndexComponent},//Página inicial
  {path : "contact", component : ContactComponent}, //Página de contacto
  {path : "education", component : EducactionComponent}, //Página de Educación
  {path : "projects", component : ProjectsComponent}, //Listado de Proyectos
  {path : "certifications", component : CertificationsComponent}, //Certificaciones
  {path : "languages", component : LanguagesComponent} //Lenguajes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
