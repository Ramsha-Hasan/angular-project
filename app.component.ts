import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 items = [];
 newItems = "";
 pushItems = function(){
   if (this.newItems != ""){
     this.items.push(this.newItems);
     this.newItems = "";
   }
 }

 removeItems = function(index){
    this.items.splice(index,1);
 }
}
