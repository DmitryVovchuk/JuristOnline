import { Component, Input, OnInit } from '@angular/core';
import { LawyerService } from '../lawyer.service';
import { LoginModelService } from '../login-model.service';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input() messages = [];
  showSpinner=false;
  constructor(private loginService:LoginModelService,
              private msgService:MsgService,
              private lawyerService:LawyerService) { }

  ngOnInit(): void {
  }
  getStyle(msg){
    if(msg.messageStatus.length==24 && msg.messageStatus != this.loginService.userId){
      return {'background-color':'grey','border':'solid 1px'};
    }
    else{
      return {'background-color':'white','border':'solid 1px'};
    }
  }
  toggleVisible(msg){
    msg.visible = !msg.visible; 
    if(msg.messageStatus.length==24 && msg.messageStatus != this.loginService.userId){
      this.msgService.markAsRead(msg.groupName)
      .subscribe((data)=>{
        if(data.status == 'ok'){
          msg.messageStatus = 'read';
          if(!msg.messageType){
            this.lawyerService.msgCounts.newLawyerMsgCount--;
          }else{
            this.lawyerService.msgCounts.newLawyerAdminCount--;
          }
        }
      })
    }
  }
  getMsgStyle(txt){
    let style = {'padding': '1.5em','border-radius': '15px'}
    style['background-color'] = txt.from ==  this.loginService.userId ? 'lightgreen': 'lightblue';
    return style;
  }
  replyToMsg(msg,txt){
    if(!txt.value){
      msg.showError = true;
      return;
    }
    msg.showError = false;
    let answer = {recipientId:msg.recipientId,groupName:msg.groupName,senderId:this.loginService.userId,msg:txt.value};
    this.showSpinner = true;
    this.msgService.sendMsg(answer)
    .subscribe((data)=>{
      this.showSpinner = false;
      if(data.status==100){
        msg.messages.unshift({msg:txt.value,from:this.loginService.userId});
        txt.value='';
      }
    },
    (err)=>{
      this.showSpinner = false;
    })
  }
  fetchMoreMsg(){
    
  }
}
