import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import{ConfirmPopupModule} from 'primeng/confirmpopup';
import{ToastModule} from 'primeng/toast';
import { PricePipe } from '../../pipes/price.pipe';
import { TruncateNamePipe } from '../../pipes/truncate-name.pipe';

@Component({
  selector: 'app-product',
  standalone: true, // ✅ Required for using `imports` in component
  imports: [CommonModule, RatingModule, FormsModule,ButtonModule,ConfirmPopupModule,ToastModule,PricePipe,TruncateNamePipe],
  providers:[ConfirmationService],
  templateUrl: './product.html',
  styleUrls: ['./product.scss'] // ✅ corrected
})
export class ProductComponent {
  constructor(private confirmationService: ConfirmationService){}
  @ViewChild('deleteButton') deleteButton:any;
  @Input() product!: Product;
  @Input() test!:string;
  @Output() edit:EventEmitter<Product> =new EventEmitter<Product>();
  @Output()delete:EventEmitter<Product>=new EventEmitter<Product>();

  editProduct(){
    this.edit.emit(this.product);
  }
  confirmDelete()
  {
    this.confirmationService.confirm({
      target:this.deleteButton.nativeElement,
      message:'Are you sure that you want to delete this product?',
      accept:()=>{
        this.deleteProduct();
      }
    })
  }
  deleteProduct()
  {
    console.log()
    this.delete.emit(this.product);
  } 
ngOnInit(){
}}
