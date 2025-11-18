import { Component, OnInit } from '@angular/core';
import {  Title } from '@angular/platform-browser'

@Component({
  selector: 'app-motion-design',
  templateUrl: './motion-design.component.html',
  styleUrls: ['./motion-design.component.scss']
})
export class MotionDesignComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Motion Design");
 }

}
