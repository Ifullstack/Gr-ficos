import { Component } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dti',
  templateUrl: './grafico-dti.component.html',
  styleUrls: ['./grafico-dti.component.css']
})
export class GraficoDtiComponent {
// Radar
public radarChartLabels: string[] = ['10', '16', '16', '16', '16'];

public radarChartData: any = [
  {data: [15, 75, 55, 75, 55, ], label: 'Gráfico DTI'}
];
public radarChartType = 'radar';

// events
public chartClicked(e: any): void {
  console.log(e);
}

public chartHovered(e: any): void {
  console.log(e);
}


  constructor( public charts: ChartsModule) { }


}
