import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fields: { sizes: number[] }[] = [];

  current = '';

  constructor(public navCtrl: NavController) {
    this.fields.push({ sizes: [1, 3, 4, 2, 2] });
    this.fields.push({ sizes: [4, 4, 4] });
    this.fields.push({ sizes: [3, 3, 3, 3] });
  }

  add() {
    const sizes = this.current.split(',').map(s => parseInt(s));

    if (sizes.reduce((a, b) => a + b) !== 12) {
      alert('you need it to equal 12');
    }
    else {
      this.fields.push({ sizes: sizes });

      this.current = '';
    }
  }


}
