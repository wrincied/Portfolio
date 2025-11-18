import { Component, Input, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Free and premium tools for graphic designers | MStore");
  }
  public RealeasDb=[
      {
        srcImg:'https://stories.freepiklabs.com/storage/39401/Climbing-(2)_Artboard-1.svg',
        title:'Climbing Flat Illustrations ',
        subtitle:'StorySet',
        subtext:'Static Illustrations',
        link:'https://storyset.com/illustration/climbing/rafiki',
        linkInfo:'View illustration'
      }

  ]
}
  
