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

  portfolioAvailable = false;
  linksList = [{
    iconSrc: 'assets/icons/icon-instagram.svg',
    media: 'Instagram',
    linkSrc: 'https://www.instagram.com/naomi_lima'
  },
  {
    iconSrc: 'assets/icons/icon-linkedin.svg',
    media: 'Linkedin',
    linkSrc: 'https://www.linkedin.com/in/naomilima'

  },
  {
    iconSrc: 'assets/icons/icon-email.svg',
    media: 'Email',
    linkSrc: 'mailto:naomilima00@gmail.com'

  },
  {
    iconSrc: 'assets/icons/icon-github.svg',
    media: 'Github',
    linkSrc: 'https://github.com/naomilima00'

  }]
}
