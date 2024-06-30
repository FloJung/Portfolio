import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    HeroSectionComponent,
    SocialButtonsComponent,
    AboutComponent,
    SkillsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
