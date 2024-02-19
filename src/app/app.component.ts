import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component.component';
import { LinksComponent } from './links-component/links-component.component';
import { SkillsComponent } from './skills-component/skills-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SkillsComponent, LinksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'naomi-link-in-bio';
}
