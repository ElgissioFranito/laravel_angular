import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public Produits: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
     this.getProductsData();
  }

public getProductsData(){
  this.apiService.getProducts().subscribe((aaa)=>{
    console.log(aaa);
    this.Produits = aaa;
  });
}

}
