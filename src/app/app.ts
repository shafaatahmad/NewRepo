import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({ 
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Rangrezz');
  
  heros = ["shaktiman","ironman","hulk","superman"]
  new =""
  getval(event:Event){
   this.new = (event.target as HTMLInputElement).value;
  }

   add(){
    this.heros.push(this.new)
    
   }

  }

