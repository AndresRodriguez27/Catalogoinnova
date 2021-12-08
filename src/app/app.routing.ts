import { HablemosFundacionComponent } from './emprendimientos/social/hablemos-fundacion/hablemos-fundacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { AppComponent } from './app.component';
import { EmprendimientosComponent } from './emprendimientos/emprendimientos.component';
import { SocialComponent } from './emprendimientos/social/social.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { GastronomiaComponent } from './emprendimientos/gastronomia/gastronomia.component';
import { CubaSandwichComponent } from './emprendimientos/gastronomia/cuba-sandwich/cuba-sandwich.component';
import { MedioComponent } from './emprendimientos/medio/medio.component';
import { CepruComponent } from './emprendimientos/medio/cepru/cepru.component';
import { ArtesaniaComponent } from './emprendimientos/artesania/artesania.componet';
import { AguartesanaComponent } from './emprendimientos/artesania/aguartesana/aguartesana.component';
import { SoftwowComponent } from './emprendimientos/social/softwow/softwow.component';
import { KfrutComponent } from './emprendimientos/gastronomia/kfrut/kfrut.component';







const appRoutes = [
  { path: '', component: MyDashboardComponent  },
    { path: 'social', component: SocialComponent },
    { path: 'gastronomia', component: GastronomiaComponent},
    { path: 'actualidad', component: ActualidadComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'hablemos', component: HablemosFundacionComponent },
    { path: 'cuba', component: CubaSandwichComponent },
    { path: 'medio', component: MedioComponent },
    { path: 'cepru', component: CepruComponent },
    { path: 'artesania', component: ArtesaniaComponent },
    { path: 'aguartesana', component: AguartesanaComponent },
    { path: 'softwow', component: SoftwowComponent },
    { path: 'kfrut', component: KfrutComponent },


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
