import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ReaserchComponent } from './pages/reaserch/reaserch.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
 {path:"home", component:HomeComponent},
 {path:"about", component:AboutComponent},
 {path:"research", component:ReaserchComponent},
 {path:"contact", component:ContactComponent},
 {path:"teamWork", component:PartnersComponent},
 {path:"blog", component:BlogComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//EL path debe ser el mismo que el que se denomina el routerlink  