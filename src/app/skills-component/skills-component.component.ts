import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-component.component.html',
  styleUrl: './skills-component.component.scss'
})
export class SkillsComponent {
  listSkills = ['HTML', 'CSS', 'Tailwind CSS', 'TypeScript' , 'JavaScript', 'Angular', 'React', 'Figma'];
}
