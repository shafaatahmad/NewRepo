import { Component } from '@angular/core';

@Component({
  selector: 'app-bill',
  imports: [],
  templateUrl: './bill.html',
  styleUrl: './bill.scss'
})
export class Bill {

daal = 50;
chawal= 80;
chatni = 25;
total:any = ""
sum(){
  if(this.total== ""){
    this.total = this.daal + this.chawal + this.chatni
  }else{
    this.total = ""
  }
}}
