import { Component, OnInit } from '@angular/core';
import {  Title } from '@angular/platform-browser'
@Component({
  selector: 'app-gamedev',
  templateUrl: './gamedev.component.html',
  styleUrls: ['./gamedev.component.scss']
})
export class GamedevComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Game Development");
 }
}
