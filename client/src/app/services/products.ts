import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api';
import { PaginationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  items(items: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private apiService: Api) {}

  getProducts = (
    url: string,
    params: PaginationParams
  ): Observable<Products> => {
    return this.apiService.get(url, { params, responseType: 'json' });
  };

  addProduct=(url:string,body:any):Observable<any>=>{
    return this.apiService.post(url,body,{});
  }

  editProduct = (url:string,body:any):Observable<any>=>{
    return this.apiService.put(url,body,{});
  }

  deleteProduct=(url:string):Observable<any>=>{
    return this.apiService.delete(url,{});
  }
}