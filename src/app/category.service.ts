import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Category } from './category';
import { Resource } from './resource';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private categoriesUrl = 'http://localhost:3000/categories';
  private resourcesUrl = 'http://localhost:3000/resources';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}) 
   };
  

  constructor(
    private http: HttpClient,
  ) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
  }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.resourcesUrl)
  }
  
}
