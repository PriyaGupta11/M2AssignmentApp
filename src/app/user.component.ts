// import {Component,EventEmitter,Input,Output,NgModule} from '@angular/core';

// import {BrowserModule} from '@angular/platform-browser';

// import { FormsModule } from '@angular/forms';

// @Component({
//     selector:"user-comp",

//     templateUrl:"./user.component.html",
//     styleUrls:["./user.component.css"]

// })


// export class userComponent{
//     @Input('parentData') incomingData: string;
//     @Output('childData') outgoingData = new EventEmitter<string>();
//     childSampleData :string = "Some child Data";
//     constructor() { }

// 	public sendData(data:any){
// 		this.outgoingData.emit(data);
//     } 
// }



import { Component, OnInit,Output,EventEmitter,Input, OnChanges } from '@angular/core';  
@Component({  
  selector: 'user-comp',  
  templateUrl:"./user.component.html",
  styleUrls:["./user.component.css"]  
})  
export class userComponent implements OnInit {  

@Input() name: string;

  @Input() result:string;  // it will receive data
  @Output() clicked=new EventEmitter<string>();  
  constructor() { }  
  ngOnInit() {  
  }  
onClick(searchTerm:string){  
this.clicked.emit(searchTerm);  
}  
}

// export class userComponent implements OnChanges{


// }
