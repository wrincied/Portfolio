import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { UIUXComponent } from './components/router/uiux/uiux.component';
import { MotionDesignComponent } from './components/router/motion-design/motion-design.component';
import { IllustrationComponent } from './components/router/illustration/illustration.component';
import { WebDevComponent } from './components/router/web-dev/web-dev.component';
import { GamedevComponent } from './components/router/gamedev/gamedev.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/router/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { ReleasesComponent } from './components/home/releases/releases.component';
import { GamedesignComponent } from './components/router/gamedesign/gamedesign.component';
import { OurTeamComponent } from './components/router/our-team/our-team.component';
import { WrinciedComponent } from './components/router/wrincied/wrincied.component';
import { NikitaKrushkoComponent } from './components/router/nikita-krushko/nikita-krushko.component';
import { FelixTrexComponent } from './components/router/felix-trex/felix-trex.component';
import { AventaderComponent } from './components/router/aventader/aventader.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeartComponent } from './components/home/homeart/homeart.component';
import { AntonComponent } from './components/router/anton/anton.component';
//Components
@NgModule({
  declarations: [
    AppComponent,
    UIUXComponent,
    MotionDesignComponent,
    IllustrationComponent,
    WebDevComponent,
    GamedevComponent,
    HomeComponent,
    ErrorComponent,
    FooterComponent,
    ReleasesComponent,
    GamedesignComponent,
    OurTeamComponent,
    WrinciedComponent,
    NikitaKrushkoComponent,
    FelixTrexComponent,
    AventaderComponent,
    SliderComponent,
    HomeartComponent,
    AntonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
