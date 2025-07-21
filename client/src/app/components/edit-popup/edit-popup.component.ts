import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Product } from '../../../types';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog'
import { FormBuilder, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule,CommonModule,FormsModule,RatingModule,ButtonModule,ReactiveFormsModule],
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.scss']
})
export class EditPopupComponent implements OnChanges{
  constructor(private formBuilder:FormBuilder){

  }
  @Input() display: boolean = false;
  @Input() header!:string;
  @Input() product!: Product;

  

  specialCharacterValidator():ValidatorFn{
    return(control)=>{
      const hasSpecialCharacter=/[!@#$%^&*(),.?":{}|<>]/.test(
        control.value);
      return hasSpecialCharacter?{hasSpecialCharacter:true}:null;
    }
  }

  productForm=this.formBuilder.group({
    name:['',[Validators.required,this.specialCharacterValidator()]],
    image:[''],
    price:['',[Validators.required]],
    rating:[0],
  })

  ngOnChanges(){
    this.productForm.patchValue(this.product);
  }

  @Output() confirm = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();
  @Output() displayChange = new EventEmitter<boolean>();

onConfirm() {
  this.confirm.emit({
    name: this.productForm.value.name || '',
    image: this.productForm.value.image || '',
    price: this.productForm.value.price || '',
    rating: this.productForm.value.rating || 0,
  });

  this.display = false;
  this.displayChange.emit(this.display);
}

  onCancel() {
    this.cancel.emit(); // ✅ trigger cancel for parent listener
    this.display = false;
    this.displayChange.emit(this.display);
  }
}
