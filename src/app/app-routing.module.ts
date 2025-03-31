
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ReadRecipeComponent } from './recipes/read-recipe/read-recipe.component';
import { UpdateRecipeComponent } from './recipes/update-recipe/update-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ReadRecipeComponent,
    UpdateRecipeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }