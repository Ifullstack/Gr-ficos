import { Component } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-grafico-f-rmi',
  templateUrl: './grafico-f-rmi.component.html',
  styleUrls: ['./grafico-f-rmi.component.css']
})
export class GraficoFRMIComponent {

   // Radar
public radarChartLabels: string[] = ['Zahara de los Atunes', 'Valparaiso', 'Stockholm', 'Sydney', 'San Carlos de Bariloche',
'Mallorca', 'Aix-en-Provence', 'Auckland', 'Beaune', 'Beijing',
'Ojen', 'Jumby Bay', 'Honolulu', 'Hamptons', 'Florianopolis',
'Nevis', 'Istanbul', 'Hong Kong', 'Galle', 'Durban'];
public radarChartData: any = [
{data: [75, 58, 95, 17, 29, 65, 37, 89, 93, 81, 48, 99, 55, 10, 30, 92, 50, 78, 34, ], label: 'Gráfico FRMI'}
];
public radarChartType = 'radar';

// events
public chartClicked(e: any): void {
console.log(e);
}

public chartHovered(e: any): void {
console.log(e);
}
  constructor( public charts: ChartsModule ) { }

}
