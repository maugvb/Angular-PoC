import { Component } from '@angular/core';


@Component({
    /*Etiqueta del nombre*/ 
    selector: 'mi-componente',
    /*Html/ templateUrl para archivo html*/ 
    template: `
    <h1>{{titulo}} {{year}}</h1>
    `,
    /*Css/ styleUrls para archivo css*/ 
    //styleUrls: ['./app.component.css']
  })
                //Nombre del componente
  export class MiComponente {
    //Attr del componente
    title = 'my-app';
    public titulo: string;
    public year: number;


    constructor(){
    
        this.year = 2020;
        this.titulo = "Hola Mundo Soy Mi Componente";
        console.log("Me he cargado");
    
    }
  }
  