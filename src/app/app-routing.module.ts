import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIUXComponent } from './components/router/uiux/uiux.component';
import { MotionDesignComponent } from './components/router/motion-design/motion-design.component';
import { IllustrationComponent } from './components/router/illustration/illustration.component';
import { WebDevComponent } from './components/router/web-dev/web-dev.component';
import { GamedevComponent } from './components/router/gamedev/gamedev.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/router/error/error.component';
import { GamedesignComponent } from './components/router/gamedesign/gamedesign.component';
import { OurTeamComponent } from './components/router/our-team/our-team.component'
import { WrinciedComponent } from './components/router/wrincied/wrincied.component';
import { NikitaKrushkoComponent } from './components/router/nikita-krushko/nikita-krushko.component';
import { FelixTrexComponent } from './components/router/felix-trex/felix-trex.component';
import { AventaderComponent } from './components/router/aventader/aventader.component';
import { AntonComponent } from './components/router/anton/anton.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent, 
  },
  {
    path:'uiux',
    component: UIUXComponent,
  },
  {
    path:'illustrations',
    component: IllustrationComponent,
  },
  {
    path: 'webdevelopment',
    //WebDevComponent
    component:  ErrorComponent
  },
  {
    path:'motiondesign', 
    //MotionDesignComponent
    component: ErrorComponent
  },
  {
    path: 'gamedesign',
    //GamedesignComponent
    component: ErrorComponent
  },
  {
    path: 'Our-team',
    component: OurTeamComponent,
    children: [
      {
        path: 'Head-Developer',
        component:WrinciedComponent
      },
      {
        path:'Illustrator',
        component: NikitaKrushkoComponent
      },
      {
        path:'GameDesigner',
        component: FelixTrexComponent
      },
      {
        path: 'Manager',
        component: AventaderComponent
      },
      {
        path: 'Developer',
        component: AntonComponent
      }
    ]
  },
  {
    path: '**', 
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
