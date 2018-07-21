
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraficoFRMIComponent } from './components/grafico-f-rmi/grafico-f-rmi.component';
import { GraficoDtiComponent } from './components/grafico-dti/grafico-dti.component';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Routes
import { APP_ROUTING } from './routes.app';
import { GraficosComponent } from './components/graficos/graficos.component';
@NgModule({
  declarations: [
    AppComponent,
    GraficoFRMIComponent,
    GraficoDtiComponent,
    HomeComponent,
    PageNotFoundComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
