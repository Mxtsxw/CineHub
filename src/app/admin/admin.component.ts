import {Component, OnInit} from '@angular/core';
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator";
import {MovieCardComponent} from "../shared/components/movie-card/movie-card.component";
import {NgClass, NgForOf} from "@angular/common";
import {MovieService} from "../services/movie.service";
import {CharacterService} from "../services/character.service";
import {Character} from "../models/character";
import {Router, RouterLink} from "@angular/router";
import {switchMap, tap} from "rxjs";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatPaginatorModule, MovieCardComponent, NgForOf, NgClass, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  characters!: Character[];

  totalItems = 0;
  pageSize = 50;
  currentPage = 0;

  constructor(private charService: CharacterService,private router: Router) {
  }
  ngOnInit(): void {
    // Get characters
    this.charService.getCharactersCount().subscribe(
      (data: any) => {
        console.log(data)
        this.totalItems = data;
      }
    );
    this.charService.getCharacters(this.currentPage, this.pageSize).subscribe((data: any) => {
      console.log(data)
      this.characters = data;
    });
  }
  deleteChar(id:number):void{
    this.charService.deleteCharacter(id).pipe(
      switchMap(() => this.charService.getCharactersCount()),
      tap((data: any) => {
        this.totalItems = data;
      }),
      switchMap(() => this.charService.getCharacters(this.currentPage, this.pageSize))
    ).subscribe((data: any) => {
      this.characters = data;
    }
    )
    console.log('Character ID à supprimer:', id);
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.charService.getCharacters(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.characters = data;
    });
  }
}
