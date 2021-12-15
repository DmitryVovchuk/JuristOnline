import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LawyerService } from '../lawyer.service';
import { LoginModelService } from '../login-model.service';

@Component({
  selector: 'app-success-login',
  templateUrl: './success-login.component.html',
  styleUrls: ['./success-login.component.scss']
})
export class SuccessLoginComponent implements OnInit {

  constructor(private loginService:LoginModelService,
              private lawyerService:LawyerService,
              private router:Router,
              private route: ActivatedRoute) { }
  showProgressBar = true;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id')||'';

      this.loginService.lawyerLogedIn = true;
      this.lawyerService.getLawerAnketa(id)
        .subscribe((data)=>{
            if(data && data.status == 300){
              this.router.navigate(['../registration'],{ relativeTo: this.route });

            }
            if(data && data.status ==  'ok' && data.data){
              this.lawyerService.lawyerAnket = data.data;
              this.router.navigate(['../../lawyer'],{ relativeTo: this.route });
            }
        });
    });
  }
}