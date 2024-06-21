import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs";
import {MovieService} from "../services/movie.service";
import {MovieCardComponent} from "../shared/components/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    MovieCardComponent,
    NgForOf
  ],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent implements OnInit {

  movies: any[] = [];
  query: string = "";

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      tap(params => this.query = params['query']),
      switchMap(params => this.movieService.search(params['query']))
    ).subscribe((result: any) => {
      this.movies = result;
    }
    );
  }

}
