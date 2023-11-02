import { Component, Input } from '@angular/core';
import { IChuches } from 'src/app/models/chuches.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  @Input() chuches: IChuches[] = [];
}
