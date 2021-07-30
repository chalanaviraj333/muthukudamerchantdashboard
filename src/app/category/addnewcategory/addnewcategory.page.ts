import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-addnewcategory',
  templateUrl: './addnewcategory.page.html',
  styleUrls: ['./addnewcategory.page.scss'],
})
export class AddnewcategoryPage implements OnInit {

  constructor(private http:HttpClient, public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'New Category Successfully Saved!',
      cssClass: "backtoast",
      duration: 2000
    });
    toast.present();
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const newCategory: Category = {
      key: null,
      categoryName: form.value.categoryName,
      categoryItems: []
      
   };
    this.http.post<{name: string}>("https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/product-categories.json", newCategory)
      .subscribe(resData => {

          form.reset();
          this.presentToast();
          
        }
      );
  }

}
