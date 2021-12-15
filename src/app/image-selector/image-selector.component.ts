import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.scss']
})
export class ImageSelectorComponent implements OnInit {
  @Input() category:string;
  selected = 0;
  categories = ['Жилищное право','Земельное право','Договора','Семейное право','Уголовное право']; //TODO get from constant service 
  constructor() { }

  ngOnInit(): void {
    this.categories.map((item,index)=>{
      if(item == this.category){
        this.selected = index;
      }
    })
  }

}
