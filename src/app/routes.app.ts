
import { Routes, RouterModule } from '@angular/router';
// Components
import { HomeComponent } from './components/home/home.component';
import { GraficoDtiComponent } from './components/grafico-dti/grafico-dti.component';
import { GraficoFRMIComponent } from './components/grafico-f-rmi/grafico-f-rmi.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Routes
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'graficos', component: GraficosComponent },
  { path: 'dti', component: GraficoDtiComponent },
  { path: 'frmi', component: GraficoFRMIComponent },
  { path: '**', component: PageNotFoundComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });


