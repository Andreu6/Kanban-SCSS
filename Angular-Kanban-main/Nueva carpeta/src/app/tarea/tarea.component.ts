import {
  DatePipe
} from '@angular/common';
import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  Tarea
} from '../models/tarea-model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tareas: Tarea;

  constructor() {
    this.tareas = {
      id: 0,
      lista: "",
      img: "",
      titulo: "",
      usuarios: [{
        email: "",
        img: "",
        nick: "",
        alt: ""
      }],
      fechaFin: new Date()
    };
  }
  ngOnInit(): void {}

  fechas(fechaFin: Date) {

    let fechaA = new Date;
    let fecha = new Date(fechaFin)
    let fechaO = new Date;

    let fechaOrange = new Date(fechaA.setDate(fechaA.getDate() + 1))

    if ((fechaO.getUTCDate() == fecha.getUTCDate() && fechaO.getUTCFullYear() == fecha.getUTCFullYear() && fecha.getUTCMonth() == fechaO.getUTCMonth() ||
        (fechaO.getUTCDate() == fecha.getUTCDate() && fechaO.getUTCFullYear() == fecha.getUTCFullYear() && fecha.getUTCMonth() == fechaO.getUTCMonth())) &&
      this.tareas.lista != "Finalizadas") {
      return "orange"

    } else if (fechaA >
      fecha && this.tareas.lista == "Finalizadas") {
      return "green"

    } else if (fechaA >
      fecha && this.tareas.lista != "Finalizadas") {
      return "red"

    } else {
      return "grey"
    }
  }


  DateString(fechaFin: Date) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(fechaFin, 'yyyy-MM-dd');
  }

}
