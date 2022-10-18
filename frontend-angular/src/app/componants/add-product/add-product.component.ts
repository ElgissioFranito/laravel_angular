import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  prod = new Product;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  createProdData() {
    this.apiService.createProd(this.prod).subscribe(
      res => {
        console.log(this.prod);
      });
    this.router.navigate(["/products"]);
  }
}
