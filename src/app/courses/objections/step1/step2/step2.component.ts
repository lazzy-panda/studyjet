import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  replicas: Array<string> = [
    'Понимаю, желание рационально тратить свои средства, это правильное решение.',
    'Согласен, без денег ничего не купишь.',
    'Все так говорят, а у самих деньги есть!',
    'Хорошо, а когда у вас будут деньги?'
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNextClick() {
    this.router.navigate(['courses/objections/step3']);
  }

  onBackClick() {
    this.router.navigate(['courses/objections/step1']);
  }

}
