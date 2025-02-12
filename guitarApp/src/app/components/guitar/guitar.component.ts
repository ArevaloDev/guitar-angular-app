import { Component, Input, OnInit } from '@angular/core';
import { Guitar } from '../../interfaces/guitar.interface';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
})
export class GuitarComponent implements OnInit {

  @Input() guitars:Guitar[] = [];
  ngOnInit(): void {
    this.guitars = this.guitars.map(guitar => ({
      ...guitar,
      image: `assets/img/${guitar.image}.jpg`

    }))
    console.log(this.guitars);

  }

}
