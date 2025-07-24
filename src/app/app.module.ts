import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    MoviesComponent,
    TvComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    AboutComponent,
    MoviedetailComponent,
    ContactsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CarouselModule

  ],
  providers: [
        provideHttpClient(),

    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
