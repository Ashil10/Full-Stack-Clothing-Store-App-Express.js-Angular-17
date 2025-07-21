import { HttpContext,HttpHeaders,HttpParams } from "@angular/common/http";

export interface Options{
     headers?: HttpHeaders | Record<string, string | string[]>;
        observe?: 'body';
        context?: HttpContext;
        params?: HttpParams | Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        credentials?: RequestCredentials;
        keepalive?: boolean;
        priority?: RequestPriority;
        cache?: RequestCache;
        mode?: RequestMode;
        redirect?: RequestRedirect;
        transferCache?: {
            includeHeaders?: string[];
        } | boolean;
}

export interface Products{
    items:Product[];
    total:number;
    page:number;
    perPage:number;
    totalPages:number;
}
export interface Product{
    id?: number;
    price:string;
    name:string;
    image:string;
    rating:number;

}

export interface PaginationParams{
    [param:string]:string|number|boolean|ReadonlyArray<string|number|boolean>;
    page:number;
    perPage:number;
}