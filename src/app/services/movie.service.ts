import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


const ENDPOINT = environment.endpoint;
const path = 'movie/';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private http: HttpClient
  ) { }

  getMovies(page: number, pageSize: number) {
    return this.http.get(`${ENDPOINT}${path}get?offset=${page}&limit=${pageSize}`);
  }

  getMoviesCount() {
    return this.http.get(`${ENDPOINT}${path}count`);
  }

  getMovieGenre(id: number) {
    return this.http.get(`${ENDPOINT}movieGenre/get/${id}`);
  }


  getMovieById(id: number) {
    return this.http.get(`${ENDPOINT}${path}get/${id}`);
  }

  search(query: string) {
    return this.http.get(`${ENDPOINT}${path}search?query=${query}`);
  }
}
