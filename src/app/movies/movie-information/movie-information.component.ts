import { Component } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs";
import { MovieService } from "../../services/movie.service";
import { Movie } from "../../models/movie";

@Component({
  selector: 'app-movie-information',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './movie-information.component.html',
  styleUrls: ['./movie-information.component.scss']
})
export class MovieInformationComponent {
  movie: Movie | undefined;
  genre: string | undefined; // Variable to store movie genre

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params['id']),
      switchMap(id => this.movieService.getMovieById(id))
    ).subscribe((movie: any) => {
      this.movie = movie;
      this.movieService.getMovieGenre(movie.id).subscribe((genre: any) => {
        this.genre = genre; // Assuming the genre response has a 'name' property
      });
    });
  }
}
