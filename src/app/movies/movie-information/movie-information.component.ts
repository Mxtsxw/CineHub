import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Actor} from "../../models/actor";
import {ActivatedRoute} from "@angular/router";
import {ActorService} from "../../services/actor.service";
import {map, switchMap} from "rxjs";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-information',
  standalone: true,
  imports: [NgForOf,
    NgIf],
  templateUrl: './movie-information.component.html',
  styleUrl: './movie-information.component.scss'
})
export class MovieInformationComponent {
  movie: Movie | undefined;

  // how to retrieve the actor id from the route?
  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params['id']),
      switchMap(id => this.movieService.getMovieById(id))
    ).subscribe((actor: any) => {
      this.movie = actor;
    });
  }
}
