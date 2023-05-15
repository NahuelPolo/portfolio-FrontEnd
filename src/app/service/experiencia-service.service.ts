import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {
  URL: 'https://backend-portfolioargprog.onrender.com/auth/nuevo';
  //URL: 'https://backend-portfolioargprog.onrender.com/explab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>('https://backend-portfolioargprog.onrender.com/explab/lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>('https://backend-portfolioargprog.onrender.com/explab/' + `detail/${id}`)
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>('https://backend-portfolioargprog.onrender.com/explab/create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>('https://backend-portfolioargprog.onrender.com/explab/' + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>('https://backend-portfolioargprog.onrender.com/explab/' + `delete/${id}`);
  }
}
