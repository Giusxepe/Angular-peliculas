import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// OnInit permite ejecutar una funcinalidad antes de que se cargue el componente

export class AppComponent implements OnInit {
  // setTimeout tiene la funcionalidad de agregar un contador de tiempo 
  //antes de que se cargue el contenido de ngOnInit()
  ngOnInit(): void {
    setTimeout(() => { 
      this.peliculasEnCines= [{
        titulo: 'spiderman',
        fechadelanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://www.imdb.com/title/tt0145487/mediaviewer/rm3632146944/?ref_=tt_ov_i'
      },
      {
        titulo: 'Moana',
        fechadelanzamiento: new Date('2016-11-14'),
        precio: 300.33,
        poster:'https://www.imdb.com/title/tt3521164/mediaviewer/rm618728448/?ref_=tt_ov_i'
      }]
    }, 3000);
  }
  title = 'front-end';

  duplicarNumero(valor: number): number{
    return valor * 2
  }

  ocultar = false;

  peliculasEnCines;
  peliculasProximosEstrenos = [];

  manejarRated(voto: number): void{
    alert(voto);
  }
}
