import { Component, OnInit } from '@angular/core';
import {Serie} from './serie';
import {SerieService} from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})

export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  promedio: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series =>
      {this.series=series;
        this.getPromedio();
      }
    )
  }

  getPromedio(){
    let seasons: number = 0;
    let total: number = 0;
    for (let i=0; i<this.series.length; i++){
      seasons += this.series[i].seasons;
      total += 1;
    }
    this.promedio = Math.round(seasons/total);

  }

  ngOnInit() {
    this.getSeries();
  }

}
