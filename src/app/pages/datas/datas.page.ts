import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.page.html',
  styleUrls: ['./datas.page.scss'],
})
export class DatasPage implements OnInit {

  public dataAtual: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  trocarData(novaData): void {
    console.log('ionChange: ', novaData);
  }

}
