import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-uiux',
  templateUrl: './uiux.component.html',
  styleUrls: ['./uiux.component.scss']
})
export class UIUXComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("UI & UX");
 }
 public Title =[
   {
    title: 'UI and UX Tools' ,
    discription: 'Boost your workflow with our UI Kits, Design Systems and graphic assets'
   }

 ] 
 public uiuxcontent =[
   {
    src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/6018068a28aa358957c5b2aa_800x600-p-800.png',
        alt: 'Powerful,colorful iOS 14 Kit with 280+ Ready Layouts',
    title: 'Fragments iOS Wireframe Kit',
          subtitle:'Powerful,colorful iOS 14 Kit with 280+ Ready Layouts',
          app: 'for Sketch and Figma',
    currency:'$',
            price: '35',
    routerpresentation:'ragments-ios-wireframe-kit/presentation',
                      presentation:'View presentation',
    routerLink:'ragments-ios-wireframe-kit'
   },
   {
    src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe5ebf7099f983378d64e64_%20800.jpg',
        alt: 'Design Starter Kit',
    title: 'Design Starter Kit',
          subtitle:'Design System, UI starter kit, illustrations and skeletons',
          app: 'for Sketch',
    currency:'$',
            price: '35',
    routerpresentation:'design-starter-kit/presentation',
                      presentation:'View presentation',
    routerLink:'design-starter-kit'
   },
   {
    src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5c2ddb6aa1a87225969418b5_cp.jpeg',
        alt: 'Control Panel',
    title: 'Control Panel',
          subtitle:'Neatly organized design system with bunch of great features',
          app: 'for Sketch',
    currency:'$',
            price: '79',
    routerpresentation:'control-panel/presentation',
                      presentation:'View presentation',
    routerLink:'control-panel'
   },
   {
    src: 'https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5fe34e2ab59fa3307bf4b489_5c867988a630fe868ac66dc1_Charts.jpg',
        alt: 'Charts',
    title: 'Charts',
          subtitle:'All types of charts for your web and mobile projects',
          app: 'for Sketch',
    currency:'',
            price: 'Free',
    routerpresentation:'charts/presentation',
                      presentation:'View presentation',
    routerLink:'charts'
   }
 ]
}
