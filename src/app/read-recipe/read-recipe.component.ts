import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-read-recipe',
  templateUrl: './read-recipe.component.html',
  styleUrls: ['./read-recipe.component.css']
})
export class ReadRecipeComponent implements OnInit {
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadRecipe(id);
  }

  loadRecipe(id: string): void {
    this.recipesService.getRecipeById(id).subscribe({
      next: (recipe: any) => {
        this.recipe = recipe;
      },
      error: (error: any) => {
        console.error('Error fetching recipe:', error);
      }
    });
  }
}