import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent {
  persona: persona = null;

  isLoading: boolean = false;

  simulateLogin(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);}

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data =>{
      this.persona = data;
    }, err =>{
      alert("Error al modificar la información de perfil. Intente nuevamente.");
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(data =>{
      alert("¡Perfil modificado con éxito!");
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar la información de perfil. Intente nuevamente.");
    })
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "pfp_" + id;
    this.imageService.uploadImage($event, name)
  }
}
