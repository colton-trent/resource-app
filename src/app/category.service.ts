import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Category } from './category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private categoriesUrl = 'http://localhost:3000/categories';
  

  constructor(
    private http: HttpClient,
  ) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
  }
}
