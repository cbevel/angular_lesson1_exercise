import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'LaunchCode Photo';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.aspca.org/sites/default/files/blog_foster-myth_062718_main.jpg';
  image3 = 'https://i.pinimg.com/originals/10/7d/d6/107dd6c78abffce548a8be47f6366159.jpg';

  constructor() { }

  ngOnInit() {
  }

}