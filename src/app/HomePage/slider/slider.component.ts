import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() public sliderData;
  noWrapSlides = false;

  ngOnInit(): void {
    //console.log("slider", this.sliderData)
  }
}
