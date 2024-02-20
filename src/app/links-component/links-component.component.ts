import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-links-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links-component.component.html',
  styleUrl: './links-component.component.scss'
})
export class LinksComponent {

  linksList = [{
    iconSrc: '/assets/icons/icon-instagram.svg',
    media: 'Instagram'
  },
  {
    iconSrc: '/assets/icons/icon-linkedin.svg',
    media: 'Linkedin'
  },
  {
    iconSrc: '/assets/icons/icon-email.svg',
    media: 'Email'
  },
  {
    iconSrc: '/assets/icons/icon-github.svg',
    media: 'Github'
  }]
}
