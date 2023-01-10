import {
  Component,
  Input
} from '@angular/core';
import {
  Tarea
} from './models/tarea-model';

const k_PENDIENTES_LISTA: string = "Pendientes";
const k_PROGRESO_LISTA: string = "Progreso";
const k_FINALIZADAS_LISTA: string = "Finalizadas";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  @Input() mostrarForm = true;
  @Input() recogerdatos: any;
  @Input() tareas: Tarea[];

  listas: string[] = [];
  

  constructor() {
    const tareasJSON: string = `{
      "tareas": [
        { "id": 0, "lista": "${k_FINALIZADAS_LISTA}", "img":
        "https://picsum.photos/300/200", "titulo": "Tarea 1: Diseño UI",
        "usuarios": [{"email": "lponts@ilerna.com", "img":
        "https://picsum.photos/300/300", "nick": "Juan", "alt":
        "Usuario"}], "fechaFin": "2019-01-16" },

        {"id": 1, "lista": "${k_PROGRESO_LISTA}", "img": "https://picsum.photos/300/200",
        "titulo":"Tarea 2: Diseño de todo el Backend", "usuarios": null, "fechaFin": "2022-11-09"},

        { "id": 2, "lista": "${k_PENDIENTES_LISTA}", "img": null,
        "titulo": "Tarea 3: Diseño de la base de datos", "usuarios":
        [{"email": "jdominguez@ilerna.com", "img":
        "https://picsum.photos/200/200", "nick": "Jose", "alt": "Usuario"},
        { "email": "lponts@ilerna.com", "img":
        "https://picsum.photos/100/100", "nick": "Laura", "alt":
        "Usuario"}], "fechaFin": "2022-11-16" },

        { "id": 3, "lista": "${k_PENDIENTES_LISTA}", "img": null,
        "titulo": "Tarea 4: Implementar todo el Front-End", "usuarios": null,
        "fechaFin": null }
      ]
    }`;

    const tareasDict: any = JSON.parse(tareasJSON);
    this.tareas = tareasDict['tareas'];

    this.listas.push(k_PENDIENTES_LISTA);
    this.listas.push(k_PROGRESO_LISTA);
    this.listas.push(k_FINALIZADAS_LISTA);
  }

  leerFormulario(json: string) {
    let json2 = JSON.parse(json)
    console.log(json2.fechaFin)

    for (let i = 0; i < this.tareas.length; i++) {

      if (json2.id == this.tareas[i].id) {

        this.tareas[i] = json2;

      }
    }
    if (json2.id == this.tareas.length) {

      this.tareas.push(json2);
      console.log(this.tareas)
    }
  }


  mostrarform(mostrar2 ? : Tarea) {
    this.recogerdatos = mostrar2;
    this.mostrarForm = false;
  }

  esconderform(esconderForm: boolean) {

    this.mostrarForm = esconderForm;

  }

  recogerDatos(datos: Tarea) {

    this.recogerdatos = datos;
    this.mostrarForm = false;

  }

}
