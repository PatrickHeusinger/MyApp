import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

 
  images = ['home_1.png', 'home_2.jpg','home_3.gif'];
  headlines = ['Bring design to the next level', 'Bring art to the next level','Bring everything to the next level'];
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
  


