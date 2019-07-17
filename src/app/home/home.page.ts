import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  date_card:any;
  new_date: Date;
  items:any;
  

  overall_total:0;

  constructor() {
    this.date_card = [
    ];
    this.overall_total=0;
    

  }

  addCard(){
    this.date_card.push({
      date: this.new_date,
      new_item:'',
      new_price:'',
      total: 0,
      items:[]
    });

    
  }

  btnClick(index){
    this.date_card[index].items.push({name:this.date_card[index].new_item,price:this.date_card[index].new_price})
    this.date_card[index].total+=this.date_card[index].new_price;
    this.overall_total += this.date_card[index].new_price;
    this.date_card[index].new_item = '';
    this.date_card[index].new_price='';
    
    
  }


}
