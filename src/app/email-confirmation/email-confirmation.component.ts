import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { LawyerService } from '../lawyer.service';
import { LoginModelService } from '../login-model.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent implements OnInit {
  showProgressBar = false;
  message = '';
  counter = 10;
  showCounter = true;
  myObserver = {
    next: (x: number) => this.counter--,
    error: () => {},
    complete: () =>{ this.router.navigate(['../lawyer'],{ relativeTo: this.route })},
  };
  constructor( private lawyerService:LawyerService,
               private router:Router,
               private route: ActivatedRoute,
               private loginService:LoginModelService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let token = params.get('token') || '';
      this.showProgressBar = true;
      this.loginService.confirmEmail(token)
        .subscribe((data)=>{
          if(data && data.status == 500){
              this.showCounter = true;
              interval(1000).pipe(take(10)).subscribe(this.myObserver);
          }
          this.message = data.msg;
        });
    });
  }

}
