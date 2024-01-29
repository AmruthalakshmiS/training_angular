import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../SERVICES/api.service';
import { ProductService } from '../../SERVICES/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  items: any[] = [];
  selectedItem: any;

  constructor(private api: ApiService, private productService: ProductService) {}
  

    ngOnInit(): void{
      this.getProducts();
      

      this.productService.getProductDetails().subscribe(data => {
        this.items = data;
      });

    }
    getProducts(){
      this.api.getJson().subscribe(resp =>{
        // console.log('resp', resp)
        this.items = resp
      })
    }
    showDescription(item: any): void {
      // alert(`Description: ${item.desc}`);
      this.selectedItem = item;
    }
  }


