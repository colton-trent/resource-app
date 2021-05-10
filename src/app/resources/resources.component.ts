import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Resource } from '../resource';
import { CategoryService } from '../category.service';
import { ɵangular_packages_platform_browser_dynamic_testing_testing_a } from '@angular/platform-browser-dynamic/testing';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources: Resource[] = [];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getResources();
  }

  getResources(): number {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getResources().subscribe(resources => this.resources = resources);
    console.log(id);
    return id;

  }
}