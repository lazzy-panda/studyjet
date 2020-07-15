import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-step1',
    templateUrl: './step1.component.html',
    styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    onNextClick() {
      this.router.navigate(['courses/objections/step2']);
    }

    onBackClick() {
        this.router.navigate(['courses/objections']);
    }
}
