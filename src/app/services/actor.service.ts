import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


const ENDPOINT = environment.endpoint;
const path = 'actor/';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(
    private http: HttpClient
  ) { }

  getActors(page: number, pageSize: number) {
    return this.http.get(`${ENDPOINT}${path}get?offset=${page}&limit=${pageSize}`);
  }

  getActorsCount() {
    return this.http.get(`${ENDPOINT}${path}count`);
  }


  getActorById(id: number) {
    return this.http.get(`${ENDPOINT}${path}get/${id}`);
  }
}
