import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {

  public itemNumber: number = 1;
  public defaultQuantityinStock: number = 10;
  public maxQuantityLimit: number = 10;
  public minQuantityLimit: number = 1;
  public productWeightUnit: string = 'G'

  constructor(private http:HttpClient, public toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'New Product Successfully Saved!',
      cssClass: "backtoast",
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {

    this.http
      .get<{ [key: string]: Product }>(
        "https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            this.itemNumber = this.itemNumber + 1;
          }
        }
      });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const newProduct: Product = {
      key: null,
      productnumber: this.itemNumber,
      productname: form.value.productName,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/muthukudamerchant-496e8.appspot.com/o/2048px-No_image_available.svg.png?alt=media&token=795c44a2-ef49-4d52-a765-b7640d6ebe87',
      productWeight: form.value.productWeight + this.productWeightUnit,
      productmaxsellingprice: form.value.maxSellingPrice,
      productoursellingprice: form.value.ourPrice,
      quantityinstock: this.defaultQuantityinStock,
      itemMaxQuantity: this.maxQuantityLimit,
      itemMinQuantity: this.minQuantityLimit,
      
   };
    this.http.post<{name: string}>("https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json", newProduct)
      .subscribe(resData => {
          this.itemNumber = this.itemNumber + 1;
          form.reset();
          this.presentToast();
          
        }
      );
  }

  _ionChangeQIS(event) {

    this.defaultQuantityinStock = Number(event.target.value);

  }

  _ionChangeMOQ(event) {
    this.maxQuantityLimit = Number(event.target.value);
  }

  _ionChangeMinOQ(event) {
    this.minQuantityLimit = Number(event.target.value);
  }

  segmentChanged(event) {
    this.productWeightUnit = event.target.value;
  }

}
