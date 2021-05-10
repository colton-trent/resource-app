import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { CategoryService } from '../category.service';
// import { CATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }
  
  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

}