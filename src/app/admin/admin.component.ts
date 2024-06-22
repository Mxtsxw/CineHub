import { Component } from '@angular/core';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MovieCardComponent} from "../shared/components/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {MovieService} from "../services/movie.service";
import {CharacterService} from "../services/character.service";
import {Character} from "../models/character";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatPaginatorModule, MovieCardComponent, NgForOf],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  characters: Character[] = [];
  constructor(private charService: CharacterService) {
  }
  ngOnInit(): void {
    // Get characters
    this.charService.getCharacters().subscribe((data: any) => {
      this.characters = data;
    });
  }
}
