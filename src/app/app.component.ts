import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
images = ['home_1.png', 'home_2.jpg','home_3.gif','home_4.jpg', 'home_5.jpg','home_6.jpg','home_7.jpg', 'home_8.jpg','home_9.gif','home_10.jpg', 'home_11.gif','home_12.png'];
currentImage = 0;
showImage = true;

ngOnInit(){
this.updateImage();
}

updateImage(){

setInterval(() =>{
  this.currentImage++;
  this.currentImage = this.currentImage % this.images.length;
  this.showImage = false;

  setTimeout(() => {
    this.showImage = true;
  },10);
},3000);

}
}
