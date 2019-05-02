import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-usuarioconf',
  templateUrl: './usuarioconf.component.html',
  styleUrls: ['./usuarioconf.component.scss']
})
export class UsuarioconfComponent implements OnInit {
  userDetails;
  constructor(public service:UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res
      },
      err => {
        console.log(err);
      },
    );

  }

}
