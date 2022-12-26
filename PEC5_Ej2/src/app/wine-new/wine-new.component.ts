import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

import { Wine } from '../models/wine.model';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css']
})
export class WineNewComponent {

  public wine : Wine; 
  public isOnSale = false;

  constructor() { 
    this.wine = new Wine();
  }

  createWine(wineForm: NgForm) {
    console.log('Wine form', wineForm.value);
    if (wineForm.valid) {
      this.wine = wineForm.value.wine;
      console.log('Wine Created', this.wine);
    } else {
      wineForm.form.markAllAsTouched();
      console.error('Wine form is in an invalid state');
    }
  }
}
