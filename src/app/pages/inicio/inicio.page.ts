import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public components: Componente[] = [
    {
      icone: 'logo-google-playstore',
      nome: 'Alerta',
      link: '/alert'
    },
    {
      icone: 'clipboard-outline',
      nome: 'Abas',
      link: '/action-sheet'
    },
    {
      icone: 'card-outline',
      nome: 'Cards',
      link: '/cards'
    },
    {
      icone: 'calendar-outline',
      nome: 'Datas',
      link: '/datas'
    },
    {
      icone: 'grid-outline',
      nome: 'Grids',
      link: '/grid'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icone: string;
  nome: string;
  link: string;
}
