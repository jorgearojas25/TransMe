import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    userDetails;

    collapedSideBar: boolean;

    constructor(private service:UserService) {
    }

    ngOnInit() {
        this.service.getUserProfile().subscribe(
            res=>{
                this.userDetails =res;
            },
            err=>{
                console.log(err)
            },
        );
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
