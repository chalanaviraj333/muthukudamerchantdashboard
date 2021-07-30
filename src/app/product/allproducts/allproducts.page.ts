import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonSearchbar } from '@ionic/angular';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.page.html',
  styleUrls: ['./allproducts.page.scss'],
})
export class AllproductsPage implements OnInit, OnDestroy {

  @ViewChild("search", { static: false }) search: IonSearchbar;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  private allProducts: Array<Product> = [];
  public searchedItems: Array<Product> = [];

  public hideButton: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http
      .get<{ [key: string]: Product }>(
        "https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            this.allProducts.push({
              key,
              productnumber: resData[key].productnumber,
              productname: resData[key].productname,
              imageUrl: resData[key].imageUrl,
              productWeight: resData[key].productWeight,
              productmaxsellingprice: resData[key].productmaxsellingprice,
              productoursellingprice: resData[key].productoursellingprice,
              quantityinstock: resData[key].quantityinstock,
              itemMaxQuantity: resData[key].itemMaxQuantity,
              itemMinQuantity: resData[key].itemMinQuantity
              
            });
            this.allProducts.sort((a, b) => (a.productnumber < b.productnumber ? 1 : -1));
          }
        }
      });

    this.searchedItems = this.allProducts;
  }

  ngOnDestroy() {}

  _ionChange(event) {
    const val = event.target.value;

    this.searchedItems = this.allProducts;

    if (val && val.trim() != "") {
      this.searchedItems = this.searchedItems.filter((currentproduct) => {
        if (currentproduct.productname !== undefined) {
          let searchWord =
            currentproduct.productnumber +
            currentproduct.productname;
          return searchWord.toLowerCase().indexOf(val.toLowerCase()) > -1;
        } else {
          // let searchWord = currentproduct.productnumber + currentproduct.productprice;
          // return searchWord.toLowerCase().indexOf(val.toLowerCase()) > -1;
        }
      });
    }
  }


  logScrollStart() {
    setTimeout(() => {
      this.hideButton = true;
    }, 500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
    setTimeout(() => {
      this.hideButton = false;
    }, 4000);
  }

}
