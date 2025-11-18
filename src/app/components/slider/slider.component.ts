import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent  {

  // @Input() slides: any[] = [];
  @Input() header: string = '';

  public slider=[
    {
      src: 'https://lh3.google.com/u/0/d/12Zo2go1NPE7VvPf_y0wcAuTDNXdYJysa=w200-h190-p-k-nu-iv1',

      alt: 'Wrincied ',
      role: 'Head Developer',
      name: 'Wrincied',
      text: 'One of the most popular developers of creating WebSites in the Europe',
      routerLink:'Head-Developer'
    },
    {
      src: 'https://lh3.google.com/u/0/d/1Ws-Cxtf3dJvLHG8SBl37vRpqBW1K6L4J=w200-h190-p-k-nu-iv1',
      alt: 'Nikita Krushko',
      role: 'Head Illustrator',
      name: 'Nikita Krushko',
      text: 'One of the most popular creators of vector illustrations in Europe.', 
      routerLink:'Illustrator'
    },
    {
      src:'https://lh3.google.com/u/0/d/1LZl1m7RZBcdrWi1684hDjd27H3KX26mC=w200-h190-p-k-nu-iv1',
      alt: 'FelixTrex',
      role: 'Head Game Designer',
      name: 'FelixTrex',
      text: 'One of the most popular creators of 3D Models in Europe.',
      routerLink: 'GameDesigner'
    },
    {
      src: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig1/9wS82Dv7X-LoAcripAE9wjOgPxa_rX7cn-28znWtCwbXxdD6358BovIexCmm3lmQUwbosHDo.jpg?size=100x0&quality=96&crop=0,29,818,818&ava=1',
      alt: 'Aventader',
      role: 'Head Manager',
      name: 'Aventader',
      text: 'One of the most popular developers of creating soft',
      routerLink: 'Manager'
    },
    {
      src: 'https://cdslbd.net/upload/common_photo/user-icon.png',
      alt: 'Anton',
      role: 'Head Server Developer',
      name: 'NN',
      text: 'One of the most popular developers of developing on the Python',
      routerLink: 'Developer'
    }
  ]

  
}

