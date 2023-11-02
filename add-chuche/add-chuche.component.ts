import { IChuches } from './../../models/chuches.model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-chuche',
  templateUrl: './add-chuche.component.html',
  styleUrls: ['./add-chuche.component.css'],
})
export class AddChucheComponent {
  @Output() chucheAdded = new EventEmitter<IChuches>();

  addChuche(chuche: IChuches) {
    this.chucheAdded.emit(chuche);
  }

  toNumber(price: string): number {
    return parseInt(price);
  }
}
