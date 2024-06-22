import { Component } from '@angular/core';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MovieCardComponent} from "../shared/components/movie-card/movie-card.component";
import {NgClass, NgForOf} from "@angular/common";
import {MovieService} from "../services/movie.service";
import {CharacterService} from "../services/character.service";
import {Character} from "../models/character";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatPaginatorModule, MovieCardComponent, NgForOf, NgClass, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  characters: Character[] = [];
  constructor(private charService: CharacterService,private router: Router) {
  }
  ngOnInit(): void {
    // Get characters
    this.charService.getCharacters().subscribe((data: any) => {
      this.characters = data;
    });
  }
  deleteChar(id:number):void{
    console.log('Character ID à supprimer:', id);
    this.charService.deleteCharacter(id);
  }
}
