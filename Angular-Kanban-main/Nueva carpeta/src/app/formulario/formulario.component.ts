import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Usuario } from '../models/usuario-model';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['../appstyle.component.css']
})



export class FormularioComponent extends AppComponent {

  @Output() guardarForm: EventEmitter<string> = new EventEmitter<string>();
  @Output() evento: EventEmitter<boolean> = new EventEmitter<boolean>();

  taskForm = new FormGroup({
    id: new FormControl(),
    titulo: new FormControl('', [Validators.required]),
    lista: new FormControl('', [Validators.required]),
    fechaFin: new FormControl(),
    img: new FormControl(),
    usuario: new FormControl(),
  });

  usuarios:Usuario[] = [];

  ngOnInit(): void {

    if(this.recogerdatos != undefined){

      this.taskForm.setValue({

        id: this.recogerdatos.id,
        titulo: this.recogerdatos.titulo,
        lista: this.recogerdatos.lista,
        fechaFin: this.recogerdatos.fechaFin,
        img: this.recogerdatos.img,
        usuario: this.usuarios

      });

    } else {

      this.taskForm.setValue({

        id: this.tareas.length,
        titulo: "",
        lista: "",
        fechaFin: "",
        img: "",
        usuario: ""

      });
    }
  }


  getErrorMessageTitulo() {
    if (this.taskForm.controls.titulo.hasError('required')) {
      return 'El titulo es obligatorio';
    }

    return this.taskForm.controls.titulo.hasError('required');
  }

  getErrorMessageLista() {
        if (this.taskForm.controls.lista.hasError('required')) {
      return 'El estado es obligatorio';
        }
      return this.taskForm.controls.lista.hasError('required');
  }



  onSubmit() {
    if (!this.taskForm.valid) {

    }
    else {     
      this.guardarForm.emit(JSON.stringify(this.taskForm.value));
      this.evento.emit(true);
    }

  }
}