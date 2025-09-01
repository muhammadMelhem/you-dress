import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE_URL = 'http://localhost:8003/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Example method to fetch articles through the BFF
  getArticles(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/articles`, { withCredentials: true });
  }

  // Add other methods for different endpoints (POST, PUT, DELETE)
  // createArticle(article: any): Observable<any> {...}
}
