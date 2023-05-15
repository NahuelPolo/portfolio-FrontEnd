import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/`+ name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {for(let item of response.items){
      this.url = await getDownloadURL(item);
      console.log("Firebase image URL generated succesfully:" + this.url);
      alert("¡Imagen procesada con éxito!")
    }})
    .catch(error =>{
      alert("Error al procesar su imagen, inténtelo nuevamente o utilice otra imagen.");
      console.log(error)})
  }
}
