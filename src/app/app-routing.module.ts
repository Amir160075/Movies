import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

const routes: Routes = [
  {path:'' , redirectTo:'home',pathMatch:'full'}, 
  {path:'home' , component:HomeComponent}, 
  {path:'about' , canActivate:[authGuard], component:AboutComponent},
  {path:'gallery' , canActivate:[authGuard], component:GalleryComponent},
  {path:'movies' , canActivate:[authGuard], component:MoviesComponent},
  {path:'contacts' , canActivate:[authGuard], component:ContactsComponent},
  {path:'tv' , canActivate:[authGuard], component:TvComponent},
  {path:'settings' , loadChildren:()=> import('./settings/settings.module').then(x => x.SettingsModule)},
  {path:'moviedetail/:id' , component:MoviedetailComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'**' , component:HomeComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
