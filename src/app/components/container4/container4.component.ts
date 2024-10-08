import { Component } from '@angular/core';

@Component({
  selector: 'app-container4',
  templateUrl: './container4.component.html',
  styleUrls: ['./container4.component.css']
})
export class Container4Component {
  images = [
    { src: '/assets/img/Projetos/MySite FullStack ver.jpg', alt: 'MySite', captionTitle: 'My Site Project + Figma Design', captionText: 'Projeto pessoal feito em Angular 16 utilizando HTML, CSS, TS, ANGULAR MATERIAL e bibliotecas externas com STYLED COMPONENTS. Projeto 100% responsivo com uso de MEDIA QUERY.', url: 'https://github.com/kirakman/my-site' },
    { src: '/assets/img/Projetos/animeprimefull.png', alt: 'App Anime Prime', captionTitle: 'App Mobile (Android) Anime Prime - React Native + EXPO GO', captionText: 'Projeto pessoal feito com React Native utilizando uma API externa de Animes', url: 'https://github.com/kirakman/Anime-Prime'},
    { src: '/assets/img/Projetos/CyberFox.png', alt: 'Cyber Fox', captionTitle: 'Cyber Fox - Cyber Security APP', captionText: 'Projeto pessoal feito em React Native + EXPO GO utilizando bilbiotecas de componentes + Firebase + Fire Store', url: 'https://github.com/kirakman/CyberFox' },
    { src: '/assets/img/Projetos/Marketing Uniceplac.JPG', alt: 'Site Marketing', captionTitle: 'Site Marketing UNICEPLAC', captionText: 'Front end feito em Angular 16 e Backend feito com Java Spring Boot, esse projeto foi disponibilizado para registro de eventos da própria faculdade que tinha como objetivo informar os estudantes e público no geral. ', url: 'https://github.com/kirakman/ProjetoMarketing'},
    { src: '/assets/img/Projetos/Mundo invertido Stranger Things.JPG', alt: 'Site Stranger Things', captionTitle: 'Mundo Invetido Stranger Things', captionText: 'Projeto feito com HTML, CSS e JS puro com duas templates, dark mode e light mode, em homenagem à série Stranger Things, com formulário reativo enviando dados para backend Firebase.', url: 'https://github.com/kirakman/Landing_Page_Stranger_Things_DIO' },
    { src: '/assets/img/Projetos/Pokedex.png', alt: 'Pokédex', captionTitle: 'Clássica Pokédex', captionText: 'Pokédex feita em Angular com requisição em API, utilizando alguns conceitos de Infinity Scroll, Lazy Loading e Filter Pipe.', url: 'https://github.com/kirakman/pokedex' },
    { src: '/assets/img/Projetos/UniteSummit.jpg', alt: 'Unite Summit', captionTitle: 'Unite Summit', captionText: 'Unite Summit em React Native + EXPO GO', url: 'https://github.com/kirakman/nwl-unite' },
  ];
}
