import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { response } from 'express';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  trendingMovies:any[]=[]
  trendingTv:any[]=[]
  trendingPeople:any[]=[]
  imagePrefix:string = 'https://image.tmdb.org/t/p/w500'
  constructor(private _MoviesService:MoviesService){}

  ngOnInit():void{
    this._MoviesService.getTrendind('movie').subscribe((response)=>{
      this.trendingMovies = response.results.slice(0,10);

    })


    this._MoviesService.getTrendind('tv').subscribe((response)=>{
      this.trendingTv = response.results.slice(0,10);

    })


    this._MoviesService.getTrendind('person').subscribe((response)=>{
      this.trendingPeople = response.results.slice(0,10);

    })
  }

}
