import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products';
import type { Products, Product } from '../../types';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  products: Product[] = [];
  totalRecords: number = 0;
  rows: number = 5;

  @ViewChild('paginator')paginator:Paginator | undefined;

  resetPaginator()
  {
    this.paginator?.changePage(0);
  }
  displayEditPopup:boolean=false;
  displayAddPopup:boolean=false;
  toggleEditPopup(product:Product)
  {
    this.selectedProduct=product;
    this.displayEditPopup=true;
    console.log("edit");
  }

  toggleDeletePopup(product:Product)
  {if(!product.id){
    return}

    this.deleteProduct(product.id);

  }

  toggleAddPopup()
  {
    this.displayAddPopup=true;
    console.log("add");
  }
  selectedProduct:Product={
    id:0,
    name:'',
    image:'',
    price:'',
    rating:0,
  };

  onConfirmEdit(product:Product)
  {
    if(!this.selectedProduct.id)
    {
      return;
    }
    this.editProduct(product,this.selectedProduct.id??0);
    this.displayEditPopup=false;

  }
  onConfirmAdd(product:Product)
  {
    this.addProduct(product);
    this.displayAddPopup=false;
  }
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }

  onProductOutput(product: Product) {
    console.log(product, 'Output');
  }

  onPageChange(event: any) {
    this.rows = event.rows;
    this.fetchProducts(event.page, this.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe({
        next: (prod: Products) => {
          this.products = prod.items;
          this.totalRecords = prod.total;
          console.log(this.products);
        },
        error: (error) => {
          console.error('Fetch error:', error);
        }
      });
  }

  editProduct(product: Product, id: number) {
    this.productsService
      .editProduct(`http://localhost:3000/clothes/${id}`, product)
      .subscribe({
        next: (data) => {
          console.log('Edited:', data);
           this.fetchProducts(0, this.rows);
           this.resetPaginator();
        },
        error: (error) => {
          console.error('Edit error:', error);
        }
      });

    console.log(product, 'Edit');
  }

 deleteProduct(id: number) {
  this.productsService.deleteProduct(`http://localhost:3000/clothes/${id}`)
    .subscribe({
      next: (data) => {
        console.log('Deleted:', data);
        this.fetchProducts(0, this.rows);
        this.resetPaginator();
      },
      error: (error) => {
        console.error('Delete error:', error);
      }
    });
}


  addProduct(product: Product) {
    this.productsService
      .addProduct('http://localhost:3000/clothes', product)
      .subscribe({
        next: (data) => {
          console.log('Added:', data);
           this.fetchProducts(0, this.rows);
           this.resetPaginator();
        },
        error: (error) => {
          console.error('Add error:', error);
        }
      });
  }
}
