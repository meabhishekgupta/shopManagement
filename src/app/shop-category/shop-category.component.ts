import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-category',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './shop-category.component.html',
  styleUrl: './shop-category.component.css'
})
export class ShopCategoryComponent {
  shopCategories : any[] = [];

  constructor(private http: HttpClient){
    this.getShopCategories();
  }

  getShopCategories(){
    this.http.get("https://localhost:7007/api/ShopCategory").subscribe((result:any)=>{
      this.shopCategories = result;
    })
  }
}
