import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { UsereventService } from '../../shared/services/userevent.service';
declare var $:any;

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    constructor(public service:UserService,public miseventos:UsereventService) {}
    userDetails;
    ngOnInit() {
        this.miseventos.getList();
        this.service.getUserProfile().subscribe(
            res => {
              this.userDetails = res
            },
            err => {
              console.log(err);
            },
          );
    // $('id').append(this.userDetails.id);
    console.log(this.userDetails);
    }
}
