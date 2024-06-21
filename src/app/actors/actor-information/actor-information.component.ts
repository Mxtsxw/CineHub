import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ActorService} from "../../services/actor.service";
import {map, switchMap} from "rxjs";
import {Actor} from "../../models/actor";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-actor-information',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './actor-information.component.html',
  styleUrl: './actor-information.component.scss'
})
export class ActorInformationComponent implements OnInit{

  actor: Actor | undefined;

  // how to retrieve the actor id from the route?
  constructor(private route: ActivatedRoute, private actorService: ActorService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params['id']),
      switchMap(id => this.actorService.getActorById(id))
    ).subscribe((actor: any) => {
      this.actor = actor;
    });
  }

}
