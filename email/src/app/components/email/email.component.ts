import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

}
