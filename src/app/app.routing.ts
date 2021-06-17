import { HablemosFundacionComponent } from './emprendimientos/social/hablemos-fundacion/hablemos-fundacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { AppComponent } from './app.component';
import { EmprendimientosComponent } from './emprendimientos/emprendimientos.component';
import { SocialComponent } from './emprendimientos/social/social.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { ServiciosComponent } from './servicios/servicios.component';


const appRoutes = [
  { path: '', component: MyDashboardComponent  },
    { path: 'social', component: SocialComponent },
    { path: 'actualidad', component: ActualidadComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'hablemos', component: HablemosFundacionComponent },

// },
];



@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
//

//
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(appRoutes);
