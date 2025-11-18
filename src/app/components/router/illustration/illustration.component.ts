import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Illustrations");
 }
 public Title =[
  {
   title: 'Free and Premium Illustrations' ,
   discription: ''
  }
] 
//  {
//  src:'',
//  alt:'',
//      title:'',
//            subtitle:'',
//            app:'',
//     currency:'',
//              price: '',
//routerLink:''
//}


public illustration =[
  {
    src:'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/60a0283cd6cbe208c2e39496_800-2%20(1).png',
        alt:'Shhhh! Illustration Kit',
    title:'Shhhh! Illustration Kit',
          subtitle:'Bright and well-though-out startup illustrations',
          app:'for Sketch, Figma, Illustrator, Affinity Designer',
    payment: 'Free and Paid Versions',
    routerLink:'Shhhh! Illustration Kit'
  },
  {
    src:'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/609298616f4d571fa469308e_Cover.jpg',
    alt:'Bzzzt',
        title:'Bzzzt',
              subtitle:'Beautiful 3d abstract illustrations',
              app:'for Sketch, Figma, Illustrator, Affinity Designer',
        payment:'Free and Paid Versions',
    routerLink:''
  },
  {
    src:'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1c07acc3e6ffb9935a0f9_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.05.40-p-500.png',
    alt:'Fresh, creative illustration',
        title:'Fresh, creative illustration',
              subtitle:'Funny, colorful and eye-catching illustrations',
              app:'for Sketch, Figma, Illustrator, Affinity Designer',
        payment:'Free and Paid Versions',
    routerLink:''
  },
  {
    src:'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1c203173d33dea1f7bc4b_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.04.15.png',
    alt:'Knock! Illustration Kit',
        title:'Knock! Illustration Kit',
              subtitle:'20 carefully-designed and energy-filled metaphors of the IT world',
              app:'for Sketch, Figma, Illustrator, Affinity Designer',
        payment:'Free and Paid Versions',
  routerLink:''
  },
  {
      src:'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1b8b3d5b00e83a2246e48_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.04.32.png',
      alt:'Clusck! Illustration Kit',
          title:'Clusck! Illustration Kit',
                subtitle:'Stylish and cute illustration set for any kind of projects',
                app:'for Sketch, Figma, Illustrator, Affinity Designer',
          payment:'Free and Paid Versions',
    routerLink:''
  },
  {
    src:'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1baa67579e67a7eb75941_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.05.22.png',
    alt:'Waaahh! Illustration Kit',
        title:'Waaahh! Illustration Kit',
              subtitle:'Stylish,bright and well-though-out startup illustrations',
              app:'for Sketch, Figma, Illustrator, Affinity Designer',
          payment:'Free and Paid Versions',
  routerLink:''
  },
  {
      src:'https://stories.freepiklabs.com/storage/8139/Online-Personal-Trainer_Mesa-de-trabajo-1.svg',
      alt:'Online Personal Trainer Isometric',
          title:'Online Personal Trainer Isometric',
                subtitle:'',
                app:'for Sketch, Figma, Illustrator, Affinity Designer',
            payment:'Free and Paid Versions',
    routerLink:''
  },
  {
    src:'https://stories.freepiklabs.com/storage/37033/Online-article-01.svg',
    alt:'Online article Cartoon Illustrations',
        title:'Online article Cartoon Illustrations',
              subtitle:'',
              app:'for Sketch, Figma, Illustrator, Affinity Designer',
            payment:'Free and Paid Versions',
  routerLink:''
  }

]
}
