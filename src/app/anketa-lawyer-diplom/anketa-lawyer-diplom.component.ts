import { Component, OnInit } from '@angular/core';
import { LawyerService } from '../lawyer.service';

@Component({
  selector: 'app-anketa-lawyer-diplom',
  templateUrl: './anketa-lawyer-diplom.component.html',
  styleUrls: ['./anketa-lawyer-diplom.component.scss']
})
export class AnketaLawyerDiplomComponent implements OnInit {
  slides=[];
  isChanged = false;
  constructor(private lawyerService:LawyerService) { }

  ngOnInit() {
    this.slides = this.lawyerService.lawyerAnket.diploms ? [...this.lawyerService.lawyerAnket.diploms] : [];
  }
  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      let img = reader.result as string;
      this.slides.unshift(img);
      this.isChanged = true;
      if(this.slides.length>3)
        this.slides.length = 3;
    }
    reader.readAsDataURL(file)
  }
  removeSlide(i){
    this.slides.splice(i,1);
  }
  saveDiploms(){
    if(this.slides && this.slides.length && this.isChanged){
      const dt = new FormData();
      this.slides.forEach((item,index)=>{
          dt.append('file_'+index,item);
      });
      this.lawyerService.updateDiploms(dt).subscribe(
        (data)=>{},
        (error)=>{},
        );
    }
  }
}
