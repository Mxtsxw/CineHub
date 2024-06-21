import {Component, Input} from '@angular/core';
import {Actor} from "../../../models/actor";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-actor-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './actor-card.component.html',
  styleUrl: './actor-card.component.scss'
})
export class ActorCardComponent {
  @Input() actor!: Actor;
}
