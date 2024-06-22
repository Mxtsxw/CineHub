import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";


const ENDPOINT = environment.endpoint;
const path = 'character/';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  getCharacters() {
    return this.http.get(`${ENDPOINT}${path}getAll`);
  }
  getCharById(id: number) {
    return this.http.get(`${ENDPOINT}${path}get/${id}`);
  }
}
