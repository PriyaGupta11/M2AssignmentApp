
import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';  
@Component({  
  selector: 'user-comp',  
  templateUrl:"./user.component.html",
  styleUrls:["./user.component.css"]  
})  
export class userComponent implements OnInit {  

  @Input() resultAr:any[]; 
  @Output() clicked=new EventEmitter<string>();  
  constructor() { }  
  ngOnInit() {  
  }  
onClick(searchTerm:string){  

 //this.clicked.emit(searchTerm);  
if(searchTerm!=''){  
  this.resultAr=this.resultAr.filter(res=>res.userName.startsWith(searchTerm));  
  }  
  else{  
    this.resultAr=this.resultAr;
     } 
}  
}

