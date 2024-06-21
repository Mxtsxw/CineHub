import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const ENDPOINT = environment.endpoint;
const path = 'search/';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
}
