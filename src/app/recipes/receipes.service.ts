
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Recipe {
  id: number;
  name: string;
  difficulty: string;
  rating: number;
  cuisine: string;
  
}

interface RecipesResponse {
  recipes: Recipe[];
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiUrl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<RecipesResponse> {
    return this.http.get<RecipesResponse>(this.apiUrl);
  }
}