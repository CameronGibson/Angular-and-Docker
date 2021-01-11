import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  public image: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  processImage(event): void {
    this.image = event.target.files[0];
    console.log(this.image);
  }

  submit(): void {
    //push to db.
    this.image = null; //set image back to null
    console.log("image cleared successfully.");
  }

}
