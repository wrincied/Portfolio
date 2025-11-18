import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeart',
  templateUrl: './homeart.component.html',
  styleUrls: ['./homeart.component.scss']
})
export class HomeartComponent implements OnInit {

  constructor() {}

  //  При инициализации автоматически добавляем routerLink во все нужные массивы
  ngOnInit() {
    this.illustrationDBflex = this.addRouterLinks(this.illustrationDBflex, 'illustrations');
    this.illustrationDBflexparttwo = this.addRouterLinks(this.illustrationDBflexparttwo, 'illustrations');
    this.UIUXDb = this.addRouterLinks(this.UIUXDb, 'uiux');
  }

  // Генерация routerLink из title + категории
  addRouterLinks(list: any[], category: string) {
    return list.map(item => {
      const slug = item.title
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')        
        .replace(/[^\w-]+/g, '');  

      return {
        ...item,
        routerLink: `/${category}/${slug}`
      };
    });
  }

  public illustrationDB: any[] = [
    {
      src:'https://stories.freepiklabs.com/storage/37033/Online-article-01.svg',
      TypeArt: 'Static Illustrations',
      title: 'Online article Cartoon Illustrations',
      author: 'StorySet',
      link: 'https://storyset.com/illustration/online-article/bro',
      linkInfo:'View illustration'
    }
  ];

  public illustrationDBPartTwo: any[] = [
    {
      src:'https://stories.freepiklabs.com/storage/8139/Online-Personal-Trainer_Mesa-de-trabajo-1.svg',
      TypeArt: 'Static Illustrations',
      title: 'Online Personal Trainer Isometric',
      author: 'StorySet',
      link: 'https://storyset.com/illustration/online-personal-trainer/amico',
      linkInfo:'View illustration',
      disc: 'Wash your hands...'
    }
  ];

  public illustrationDBflex: any[] = [
    {
      src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/60a0283cd6cbe208c2e39496_800-2%20(1).png',
      alt:'Shhhh! Illustration Kit',
      title: 'Shhhh! Illustration Kit',
      subtitle: 'Bright and well-though-out startup illustrations',
      app:'for Sketch, Figma, Illustrator, Affinity Designer',
      payment:'Free and Paid Versions'
    },
    {
      src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/609298616f4d571fa469308e_Cover.jpg',
      alt:'Bzzzt',
      title: 'Bzzzt',
      subtitle: 'Beautiful 3d abstract illustrations',
      app:'for Sketch, Figma, Illustrator, Affinity Designer',
      payment:'Free and Paid Versions'
    },
    {
      src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1c07acc3e6ffb9935a0f9_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.05.40-p-500.png',
      alt:'Fresh, creative illustration',
      title: 'Fresh, creative illustration',
      subtitle: 'Funny, colorful and eye-catching illustrations',
      app:'for Sketch, Figma, Illustrator, Affinity Designer',
      payment:'Free and Paid Versions'
    }
  ];

  public illustrationDBflexparttwo: any[] = [
    {
      src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1c203173d33dea1f7bc4b_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.04.15.png',
      alt:'Knock! Illustration Kit',
      title: 'Knock! Illustration Kit',
      subtitle: '20 carefully-designed and energy-filled metaphors of the IT world',
      app:'for Sketch, Figma, Illustrator, Affinity Designer',
      payment:'Free and Paid Versions'
    },
    {
      src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1b8b3d5b00e83a2246e48_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.04.32.png',
      alt:'Clusck! Illustration Kit',
      title: 'Clusck! Illustration Kit',
      subtitle: 'Stylish and cute illustration set for any kind of projects',
      app:'for Sketch, Figma, Illustrator, Affinity Designer',
      payment:'Free and Paid Versions'
    },
    {
      src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe1baa67579e67a7eb75941_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202020-12-22%20%D0%B2%2012.05.22.png',
      alt:'Waaahh! Illustration Kit',
      title: 'Waaahh! Illustration Kit',
      subtitle: 'Stylish,bright and well-though-out startup illustrations',
      app:'for Sketch, Figma, Illustrator, Affinity Designer',
      payment:'Free and Paid Versions'
    }
  ];

  public IllutrationTitleDb: any[] = [
    {
      number: '#1',
      title: 'Illustrations'
    }
  ];

  public IllutrationTitleDbTwo: any[] = [
    {
      number: '#2',
      title: 'UI and UX'
    }
  ];

  public UIUXDb: any[] = [
    {
      src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/6018068a28aa358957c5b2aa_800x600-p-800.png',
      alt:'Fragments iOS Wireframe Kit',
      title: 'Fragments iOS Wireframe Kit',
      subtitle: 'Powerful,colorful iOS 14 Kit with 280+ Ready Layouts',
      app:'for Sketch and Figma',
      presentation:'View Presentation',
      price: '35',
      currency:'$'
    },
    {
      src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe5ebf7099f983378d64e64_%20800.jpg',
      alt:'Design Starter Kit',
      title: 'Design Starter Kit',
      subtitle: 'Design System, UI starter kit, illustrations and skeletons',
      app:'for Sketch ',
      presentation:'View Presentation',
      currency:'$',
      price: '35'
    },
    {
      src:'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5c2ddb6aa1a87225969418b5_cp.jpeg',
      alt:'Control Panel',
      title:'Control Panel',
      subtitle:'Neatly organized design system with bunch of great features',
      app: 'For Sketch',
      presentation:'View Presentation',
      currency:'$',
      price: '79'
    },
    {
      src:'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe34e2ab59fa3307bf4b489_5c867988a630fe868ac66dc1_Charts.jpg',
      alt: 'Charts',
      title:'Charts',
      subtitle:'All types of charts for your web and mobile projects',
      app: 'For Sketch',
      presentation:'View Presentation',
      currency:'',
      price: 'Free'
    }
  ];
}
