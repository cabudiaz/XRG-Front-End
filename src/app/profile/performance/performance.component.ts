import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';

import {Chart, registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  profile:any
  performance:any
  
  
  constructor(
    private profileService: ProfileService,
  ) { }
  

  ngOnInit(): void {
    this.getProfile();
   
    
    
    
  }
 
    getProfile () {
      this.profileService.getProfile().subscribe ({
        next:(response:any)=>{
          this.profile = response.data
          this.performance = response.data.performance
          /* console.log(this.performance); */
          this.RenderChart();
          
         /*  console.log(this.profile); */
          
         
         
          
        },
        error:(error)=>{
          console.log(error);
          
        }
      })
    }
  

  /* RenderChart */


  RenderChart(){
    
   /*  console.log(this.profile?.performance); */
    
    const data = {
      labels: [
        'Montaña',
        'Media Montaña',
        'Rodador',
        'Resistencia',
        'Explosividad',
        
      ],
      datasets: [{
        label: 'Rendimiento',
        data: this.performance,
        fill: true,
        backgroundColor: '#ea20fe3b',
        borderColor: '#880995b3',
        borderWidth: 5,
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#a508a8',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      },]
    };

    const chartOptions = {
      
      
        plugins: {
          legend: {
            display: false,
            
          },
        },
        
      
      elements: {
        line: {
          tension: 0.18,
          borderRadius:'round',
        }
      },
      scales: {
        r: {
          max: 100,
          min: 0,
          ticks: {
            stepSize: 20,
            backdropColor: "transparent",
            color: "#009fe580",
            font:{
              size:0
            }
          },
          grid: {
            color: "#48484840"
          },
          angleLines: {
            color: "#48484840",
            tension:1,
          },
          pointLabels: {
            font: {
              size: 10
            },
            borderRadius:10,
          }
        }
      },
      
      
     
    }

    new Chart("piechart", {
      type: 'radar',
      data: data,
      options: chartOptions
    });
  }


  /*RenderChart*/

}
