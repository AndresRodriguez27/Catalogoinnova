import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { routing } from './app.routing';
import { EmprendimientosComponent } from './emprendimientos/emprendimientos.component';
import { SocialComponent } from './emprendimientos/social/social.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HablemosFundacionComponent } from './emprendimientos/social/hablemos-fundacion/hablemos-fundacion.component';
import { GastronomiaComponent } from './emprendimientos/gastronomia/gastronomia.component';
import { CubaSandwichComponent } from './emprendimientos/gastronomia/cuba-sandwich/cuba-sandwich.component';
import { MedioComponent } from './emprendimientos/medio/medio.component';
import { CepruComponent } from './emprendimientos/medio/cepru/cepru.component';
import { ArtesaniaComponent } from './emprendimientos/artesania/artesania.componet';
import { AguartesanaComponent } from './emprendimientos/artesania/aguartesana/aguartesana.component';
import { SoftwowComponent } from './emprendimientos/social/softwow/softwow.component';
import { KfrutComponent } from './emprendimientos/gastronomia/kfrut/kfrut.component';
import { FormularioNoticiaComponent } from './actualidad/formulario-noticia/formulario-noticia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './core/http.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyFooterComponent,
    EmprendimientosComponent,
    SocialComponent,
    ActualidadComponent,
    ServiciosComponent,
    GastronomiaComponent,
    HablemosFundacionComponent,
    CubaSandwichComponent,
    MedioComponent,
    CepruComponent,
    ArtesaniaComponent,
    AguartesanaComponent,
    SoftwowComponent,
    KfrutComponent,
    FormularioNoticiaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
