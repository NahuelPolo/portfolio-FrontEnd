import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL: 'https://backend-portfolioargprog.onrender.com/auth/nuevo';
  //URL: 'https://backend-portfolioargprog.onrender.com/educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>('https://backend-portfolioargprog.onrender.com/educacion/lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>('https://backend-portfolioargprog.onrender.com/educacion/' + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>('https://backend-portfolioargprog.onrender.com/educacion/create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>('https://backend-portfolioargprog.onrender.com/educacion/' + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>('https://backend-portfolioargprog.onrender.com/educacion/' + `delete/${id}`);
  }
}
