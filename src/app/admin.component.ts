// import {Component, NgModule} from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// @Component({
// selector:"admin-comp",

// templateUrl:"./admin.component.html",
// styleUrls:["./admin.component.css"]

// })




import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';  
import { Product } from './product';
//import { Product } from './product';  
//import { ProductdataService } from '../shared/productdata.service';  

@Component({  
  selector: 'admin-comp',  
  templateUrl: './admin.component.html',  
  styleUrls: ['./admin.component.css']  
}) 

// export class adminComponent implements OnInit {  
// allProduct:Product[]=[];  
//   constructor(private _data:ProductdataService) { }  
//   ngOnInit() {  
//     this._data.getAllProduct().subscribe(  
//       (data:Product[])=>{  
//         this.allProduct=data;  
//       }  
//     );  
//   }  
// }  


export class adminComponent implements OnInit {
  value:string="Priya"; 
userRecord:Product[]= [
    {
        "userId": 1,
        "userName":"Priya",
        "emailId": "pgpriya.sr@gmail.com",
        "phoneNumber": 1234567891
     },
      {
        "userId": 2,
        "userName":"Ngpriya",
        "emailId": "ngpriya.sr@gmail.com",
        "phoneNumber": 1234567822
      },
      {
        "userId": 1,
        "userName":"priya",
        "emailId": "1pgpriya.sr@gmail.com",
        "phoneNumber": 1234567891
     },
      {
        "userId": 2,
        "userName":"ppgpriya",
        "emailId": "ngpriya.sr@gmail.com",
        "phoneNumber": 1234567822
      }

]
ngOnInit():void{
  this.userRecord = this.userRecord;
}
onClicked(value:string){  
  if(value!=''){  
  this.userRecord=this.userRecord.filter(res=>res.userName.startsWith(value));  
  }  
  else{  
    this.userRecord;
     }  
  }  
}

 


