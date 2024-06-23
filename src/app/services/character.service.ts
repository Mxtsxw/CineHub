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
  getCharacters(page: number, pageSize: number) {
    return this.http.get(`${ENDPOINT}${path}get?pageNumber=${page}&pageSize=${pageSize}`);
  }
  deleteCharacter(id:number) {
    return this.http.delete(`${ENDPOINT}${path}delete/${id}`);
  }
  getCharById(id: number) {
    return this.http.get(`${ENDPOINT}${path}get/${id}`);
  }

  getCharactersCount() {
    return this.http.get(`${ENDPOINT}${path}count`);
  }
}
