import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  nombreE: string = '';
  aniosE1: string = '';
  aniosE2: string = '';
  descripcionE: string = '';

  isLoading: boolean = false;

  simulateLogin(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);}

  constructor(private experienciaService: ExperienciaServiceService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const exp= new Experiencia(this.nombreE, this.aniosE1, this.aniosE2, this.descripcionE);
    this.experienciaService.save(exp).subscribe(data => {
      alert("¡Experiencia añadida con éxito!");
      this.router.navigate(['']);
    }, err =>{
      console.log();
      alert("La creación de una nueva experiencia ha fallado.");
      // this.router.navigate(['']);
    }
    )
  }
}
