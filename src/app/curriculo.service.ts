import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Torna o serviço disponível em toda a aplicação
})
export class CurriculoService {
  private apiUrl = 'http://localhost:3000/curriculos'; // URL do back-end

  constructor(private http: HttpClient) {}

  // Obter todos os currículos
  getCurriculos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Adicionar um novo currículo
  addCurriculo(curriculo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, curriculo);
  }

  // Atualizar um currículo
  updateCurriculo(id: string, curriculo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, curriculo);
  }

  // Excluir um currículo
  deleteCurriculo(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
