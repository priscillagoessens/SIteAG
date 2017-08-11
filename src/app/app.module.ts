import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ContactComponent } from './contact/contact.component';
import { GaleryComponent } from './galery/galery.component';
import { GaleryimageComponent } from './galery/galeryimage/galeryimage.component';
import { TumblrService } from './tumblr.service';
import { PresentationComponent } from './presentation/presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MasonryModule} from 'angular2-masonry';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'galery', component: GaleryComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'presentation', component: PresentationComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GaleryComponent,
    GaleryimageComponent,
    PresentationComponent,
    ContactComponent,
    FormulaireComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    MasonryModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [TumblrService],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
