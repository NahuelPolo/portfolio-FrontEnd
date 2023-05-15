import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  expLab: Experiencia = null;

  isLoading: boolean = false;

  simulateLogin(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);}

  constructor(private experienciaService: ExperienciaServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(data =>{
      this.expLab = data;
    }, err =>{
      alert("Ha habido un error al modificar la experiencia. Intente nuevamente.");
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.expLab).subscribe(data => {
      alert("¡Experiencia modificada con éxito!");
      this.router.navigate(['']);
    }, err =>{
      alert("Ha habido un error al modificar la experiencia. Intente nuevamente.");
      this.router.navigate(['']);
    })
  }
}
