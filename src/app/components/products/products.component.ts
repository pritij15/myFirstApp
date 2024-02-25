import { Component, OnInit } from "@angular/core";

@Component({
    selector : "app-products",
    templateUrl : './products.component.html',
    styleUrls : ['./products.component.scss']
})


export class ProductsComponent implements OnInit{
    isDisabled : boolean = true;
    cartProductStatus : string = ` No Product is added to the cart.`;
    noOfProductsAdded : number = 0;
    searchedProduct : string = 'No Product is Searched Yet!';

    ngOnInit(): void {
        setTimeout(()=>{
            this.isDisabled = false;
        }, 3000)
    }
    updateCartStatus(){
        console.log("clicked!");
        this.noOfProductsAdded++;
        this.cartProductStatus = `${this.noOfProductsAdded}Product is/are added to the cart!`;
    }
    removeCartItems(){
        console.log("Removed!");
        this.noOfProductsAdded--;
        this.cartProductStatus = `${this.noOfProductsAdded}No Products is added to the cart!`;
    }
    onProductSearch(eve : Event){
        let val = (eve.target as HTMLInputElement).value;
        console.log(val);
        this.searchedProduct = val;
    }
}