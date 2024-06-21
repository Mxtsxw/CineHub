import { Routes } from '@angular/router';
import {ActorInformationComponent} from "./actors/actor-information/actor-information.component";
import {ActorsComponent} from "./actors/actors.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {MovieInformationComponent} from "./movies/movie-information/movie-information.component";
import {MoviesComponent} from "./movies/movies.component";
import {authGuard} from "./services/guard/auth.guard";

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'CineHub'},
  { path: 'login', component: LoginComponent, title: 'Login'},
  { path: 'search', component: SearchResultComponent, title: 'Search', canActivate: [authGuard]},
  { path: 'movies', component: MoviesComponent, title: 'Movies', canActivate: [authGuard]},
  { path: 'movie/:id', component: MovieInformationComponent, title: 'Movie Information', canActivate: [authGuard]},
  { path: 'actors', component: ActorsComponent, title: 'Actors', canActivate: [authGuard]},
  { path: 'actor/:id', component: ActorInformationComponent, title: 'Actor Information', canActivate: [authGuard]},
  { path: '**', redirectTo: '' }  // Redirect to home for any unknown routes
];
