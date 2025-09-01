import { Component, OnInit } from '@angular/core';
import {ApiService} from "./ApiService";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.apiService.getArticles().subscribe({
      next: (data) => {
        this.articles = data;
      },
      error: (error) => {
        console.error('Error fetching articles:', error);
        // Handle error (e.g., redirect to login if 401)
      }
    });
  }
}
