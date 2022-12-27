import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomWineValidator } from '../custom-wine-validator';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css']
})
export class WineNewComponent {

  public wineForm!: FormGroup;

  constructor(private fb: FormBuilder) {       
    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({             
      name: [null, [Validators.required, new CustomWineValidator()]],
      price: [0, [Validators.required, Validators.min(1), Validators.pattern('^[0-9]*$')]],
      imageUrl: ['', [Validators.required, Validators.pattern('^http(s?):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?$')]],
      isOnSale: [null, null]
    });
  }

  onSubmit() {
    console.log('Wine form', this.wineForm.value);
    if (this.wineForm.valid) {
      console.log('Wine Created', this.wineForm.value);
    } else {
      this.wineForm.markAllAsTouched();
      console.error('Wine form is in an invalid state');
    }
  }
}
