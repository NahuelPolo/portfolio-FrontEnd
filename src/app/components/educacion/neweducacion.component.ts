import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit{
  nombreE: string = '';
  descripcionE: string = '';
  aniosE1: string = '';
  aniosE2: string = '';

  isLoading: boolean = false;

  simulateLogin(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);}

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.aniosE1, this.aniosE2);
    this.educacionS.save(educacion).subscribe(data =>{
      alert("¡Educación creada con éxito!");
      this.router.navigate(['']);
    }, err =>{
      console.log();
      alert("Ha habido un error al crear la educación propuesta. Por favor, intente nuevamente.");
    })
  }
}
