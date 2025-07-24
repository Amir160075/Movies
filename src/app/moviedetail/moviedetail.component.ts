import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { response } from 'express';
 


@Component({
  selector: 'app-moviedetail',
  standalone: false,
  templateUrl: './moviedetail.component.html',
  styleUrl: './moviedetail.component.scss'
})
export class MoviedetailComponent {

  id:string = '';
  imagePrefix:string = 'https://image.tmdb.org/t/p/w500'
  movieDetail:any={};
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService){
   this.id = _ActivatedRoute.snapshot.params['id'];
  }


  ngOnInit():void{
    this._MoviesService.getMovieDetails(this.id).subscribe((response)=>{
      this.movieDetail = response;
      
    })

  }

}
