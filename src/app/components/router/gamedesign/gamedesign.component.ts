import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-gamedesign',
  templateUrl: './gamedesign.component.html',
  styleUrls: ['./gamedesign.component.scss']
})
export class GamedesignComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Game Design");
 }
}
