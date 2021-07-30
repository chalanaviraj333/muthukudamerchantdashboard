import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public numberOfCarRemote: number;


  public appPages = [
    { title: 'Sales',
    numberofitems: 0,
      children: [
        {
          title: 'All Sales',
          url: '/',
          icon: 'assets/icon/all.svg'
        },
        {
          title: 'Add Sale',
          url: '/',
          icon: 'assets/icon/add.svg'
        },
        {
          title: 'Edit Sale',
          url: '/',
          icon: 'assets/icon/edit.svg'
        },
        {
          title: 'Delete Sale',
          url: '/',
          icon: 'assets/icon/delete.svg'
        },
      ]
    },
    { title: 'Customers',
      numberofitems: 0,
      children: [
        {
          title: 'All Customers',
          url: '/allcustomers',
          icon: 'assets/icon/all.svg'
        },
        {
          title: 'Add Customer',
          url: '/addcustomers',
          icon: 'assets/icon/add.svg'
        },
        {
          title: 'Edit Customer',
          url: '/editcustomer',
          icon: 'assets/icon/edit.svg'
        },
        {
          title: 'Delete Customer',
          url: '/deletecustomer',
          icon: 'assets/icon/delete.svg'
        },
        {
          title: 'Export Customers',
          url: '/exportcustomers',
          icon: 'assets/icon/export.svg'
        }
      ]
    },
    { title: 'Products',
    numberofitems: 0,
      children: [
        {
          title: 'All Products',
          url: '/allproducts',
          icon: 'assets/icon/all.svg'
        },
        {
          title: 'Add New Product',
          url: '/addproduct',
          icon: 'assets/icon/add.svg'
        },
        {
          title: 'Edit Product',
          url: '/editproduct',
          icon: 'assets/icon/edit.svg'
        },
        {
          title: 'Delete Product',
          url: '/deleteproduct',
          icon: 'assets/icon/delete.svg'
        },

        // All Categories
        {
          title: 'All Categories',
          url: '/allcategories',
          icon: 'assets/icon/all.svg'
        },
        {
          title: 'Add New Category',
          url: '/addproduct',
          icon: 'assets/icon/add.svg'
        },
        {
          title: 'Products Without Category',
          url: '/editproduct',
          icon: 'assets/icon/edit.svg'
        },
        {
          title: 'Delete Category',
          url: '/deleteproduct',
          icon: 'assets/icon/delete.svg'
        },
      ]
    },
    { title: 'Categories',
    numberofitems: 0,
      children: [
        {
          title: 'All Categories',
          url: '/allcategory',
          icon: 'assets/icon/all.svg'
        },
        {
          title: 'Add New Category',
          url: '/addnewcategory',
          icon: 'assets/icon/add.svg'
        },
        {
          title: 'Products Without Category',
          url: '/productswithoutcategory',
          icon: 'assets/icon/edit.svg'
        },
        {
          title: 'Delete Category',
          url: '/deleteproduct',
          icon: 'assets/icon/delete.svg'
        },
      ]
    },
    { title: 'Storehouse',
    numberofitems: 0,
      children: [
        {
          title: 'View Stock',
          url: '/',
          icon: 'assets/icon/all.svg'
        },
        {
          title: 'Update Stock',
          url: '/',
          icon: 'assets/icon/add.svg'
        },
        {
          title: 'Change Financila Year',
          url: '/',
          icon: 'assets/icon/edit.svg'
        },
        {
          title: 'Delete Product',
          url: '/',
          icon: 'assets/icon/delete.svg'
        },
      ]
    }

  ];

  public shortcuts = ['Add New Customer', 'Add New Product', 'Add Stock', 'Last Sale Receipt'];
  constructor(private http: HttpClient ) {

  }


  async ngOnInit() {

   await this.http
   .get<{ [key: string]: string }>(
     "https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json"
   )
   .subscribe((resData) => {
     for (const key in resData) {
       if (resData.hasOwnProperty(key)) {
         this.appPages[2].numberofitems = this.appPages[2].numberofitems + 1;
       }
     }

   });
  }

}
