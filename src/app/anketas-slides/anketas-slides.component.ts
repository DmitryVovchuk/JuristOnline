import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { StaticDataService } from '../static-data.service';

@Component({
  selector: 'app-anketas-slides',
  templateUrl: './anketas-slides.component.html',
  styleUrls: ['./anketas-slides.component.scss']
})

export class AnketasSlidesComponent implements OnInit {
  slidesStore = [
    {
      id:1,
      src:'../assets/img/top-img.jpg',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:2,
      src:'../assets/img/top-img.jpg',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:3,
      src:'../assets/img/top-img.jpg',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:4,
      src:'../assets/img/top-img.jpg',
      alt:'Image_4',
      title:'Image_4'
    },
    {
      id:5,
      src:'../assets/img/top-img.jpg',
      alt:'Image_5',
      title:'Image_5'
    },
    {
      id:6,
      src:'../assets/img/top-img.jpg',
      alt:'Image_5',
      title:'Image_5'
    },
    {
      id:7,
      src:'../assets/img/top-img.jpg',
      alt:'Image_5',
      title:'Image_5'
    },    
    {
      id:8,
      src:'../assets/img/top-img.jpg',
      alt:'Image_5',
      title:'Image_5'
    },    
    {
      id:9,
      src:'../assets/img/top-img.jpg',
      alt:'Image_5',
      title:'Image_5'
    }
  ]

  customOptions: OwlOptions;

  constructor(private staticData:StaticDataService) { }

  

  ngOnInit(): void {
    this.customOptions = this.staticData.customOptions;
  }

}


