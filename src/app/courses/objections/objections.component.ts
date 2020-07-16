import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-objections',
  templateUrl: './objections.component.html',
  styleUrls: ['./objections.component.scss'],
})
export class ObjectionsComponent implements OnInit {

  constructor(private router: Router) { }
  onBackClick() {
    this.router.navigate(['/tabs/tab1']);
  }
  onStartClick() {
    this.router.navigate(['courses/objections/step1']);
  }
  ngOnInit() {
  }

}
