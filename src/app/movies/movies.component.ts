import {Component, inject} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {ActorService} from "../services/actor.service";
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator";
import {MovieService} from "../services/movie.service";
import {ActorCardComponent} from "../shared/components/actor-card/actor-card.component";
import {NgForOf} from "@angular/common";
import {MovieCardComponent} from "../shared/components/movie-card/movie-card.component";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MatPaginatorModule, MovieCardComponent, NgForOf],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  totalItems = 0;
  pageSize = 50;
  currentPage = 0;
  movies = [];

  constructor(
    private movieService: MovieService
  ) {  }

  ngOnInit(): void {
    this.movieService.getMoviesCount().subscribe((data: any) => {
      this.totalItems = data;
    })
    // Get actors
    this.movieService.getMovies(this.currentPage, this.pageSize).subscribe((data: any) => {
      console.log(data)
      this.movies = data;
    });
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.movieService.getMovies(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.movies = data;
    });
}}
