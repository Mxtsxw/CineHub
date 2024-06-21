import {Component, OnInit} from '@angular/core';
import {ActorService} from "../services/actor.service";
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {ActorCardComponent} from "../shared/components/actor-card/actor-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [MatPaginatorModule, ActorCardComponent, NgForOf],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.scss'
})
export class ActorsComponent implements OnInit {

  totalItems = 0;
  pageSize = 50;
  currentPage = 0;
  actors = [];

  constructor(
    private actorService: ActorService
  ) {  }

  ngOnInit(): void {
    this.actorService.getActorsCount().subscribe((data: any) => {
      this.totalItems = data;
    })
    // Get actors
    this.actorService.getActors(this.currentPage, this.pageSize).subscribe((data: any) => {
      console.log(data)
      this.actors = data;
    });
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.actorService.getActors(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.actors = data;
    });
  }
}
