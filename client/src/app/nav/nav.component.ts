import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  model: any = {};
  accountService = inject(AccountService);


  login(){
    this.model.username='cena'
    this.model.password = 'password'
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);

      },
      error: errorResponse=>{
        console.log(errorResponse.error);
      }
    })
    
  }

  logout(){
    this.accountService.logout();
  }
}
