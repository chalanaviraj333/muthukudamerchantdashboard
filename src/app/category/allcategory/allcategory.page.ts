import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.page.html',
  styleUrls: ['./allcategory.page.scss'],
})
export class AllcategoryPage implements OnInit {

  public allCategories: Array<Category> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get<{ [key: string]: Category }>(
        "https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/product-categories.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            this.allCategories.push({
              key,
              categoryName: resData[key].categoryName,
              categoryItems: resData[key].categoryItems
            });
          }
        }
      });
  }

}
