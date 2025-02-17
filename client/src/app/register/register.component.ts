import { Component, EventEmitter, inject, input, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: any = {}
  private accountService = inject(AccountService);
  // @Input() usersFromHomeComponent:any;
  // usersFromHomeComponent = input.required<any>()

  //@Output() cancelRegister = new EventEmitter();
  cancelRegister = output<boolean>()
  
  register(){
   this.accountService.register(this.model).subscribe({
    next: response=> {
      console.log(response)
      this.cancel()
    },
    error: errorResponse=>{console.log(errorResponse.error)}
   })
  }

  cancel(){
      this.cancelRegister.emit(false)    
  }
}
