import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public components: Componente[] = [
    
  ];

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  public toggleMenu(): void {
    this.menu.toggle();
  }

}

