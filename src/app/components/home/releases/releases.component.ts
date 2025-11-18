import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public releaseDB =[
  {
      src:'assets/img/Big collection of Business Card Mockups.jpg',
      title:'Big collection of Business Card Mockups',
      author:'Krushko Nikita',
      alt:'Big collection of Business Card Mockups'
  },
  {
          src:'assets/img/Knits.jpg',
      title:'Big collection of paid beautiful and colorful illustrations',
      author:'Krushko Nikita',
      alt:'Big collection of paid beautiful and colorful illustrations'
  },
  {
          src:'assets/img/20 funny and carefully-designed scenes in a cartoon style.png',
      title:'20 funny and carefully-designed scenes in a cartoon style',
      author:'FelixTrex',
      alt:'Big collection of Business Card Moc20 funny and carefully-designed scenes in a cartoon style'
  },
  {
          src:'assets/img/In touch.jpg',
      title:'Large collection of paid minimalistic illustrations',
      author:'Krushko Nikita',
      alt:'Large collection of paid minimalistic illustrations'
  },
  {
          src:'assets/img/UI Illustrations.jpg',
      title:'UI Illustrations',
      author:'Author',
      alt:'UI Illustrations'
  }
]
}
