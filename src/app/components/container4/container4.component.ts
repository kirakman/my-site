import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-container4',
  templateUrl: './container4.component.html',
  styleUrls: ['./container4.component.css']
})
export class Container4Component {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
