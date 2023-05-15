import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  exp: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.experienciaService.lista().subscribe(data => {this.exp = data})
  }

  delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(data =>{
        this.cargarExperiencia();
        alert("¡Experiencia borrada con éxito!")
      }, err =>{
        alert("Error al borrar la experiencia. Intente nuevamente.");
      })
    }
  }
}