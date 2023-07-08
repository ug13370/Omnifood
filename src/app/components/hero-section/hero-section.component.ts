import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  customerImgs = [
    'customer-1',
    'customer-2',
    'customer-3',
    'customer-4',
    'customer-5',
    'customer-6',
  ];
  constructor() {}

  ngOnInit(): void {}
}
