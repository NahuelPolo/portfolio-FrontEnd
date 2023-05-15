import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL: 'https://backend-portfolioargprog.onrender.com/personas/';
  //URL: 'https://backend-portfolioargprog.onrender.com/personas/';
  // http://localhost:8080/personas/

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>('https://backend-portfolioargprog.onrender.com/personas/lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>('https://backend-portfolioargprog.onrender.com/personas/' + `detail/${id}`);
  }

  // public save(educacion: Educacion): Observable<any>{
  //   return this.httpClient.post<any>(this.URL + 'create', educacion);
  // }

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>('https://backend-portfolioargprog.onrender.com/personas/' + `update/${id}`, Persona);
  }

  // public delete(id: number): Observable<any>{
  //   return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  // }
}