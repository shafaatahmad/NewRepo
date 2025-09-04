import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Rangrezz');

daal = 50;
chawal= 80;
chatni = 25;
total:any = ""
sum(){
  if(this.total== ""){
    this.total = this.daal+ this.chawal+ this.chatni
  }else{
    this.total = ""
  }
}}
