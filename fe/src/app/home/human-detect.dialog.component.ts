import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface HumanDetectData {
  messages$: Observable<Array<any>>;
}

@Component({
  selector: 'human-detect-dialog',
  templateUrl: 'human-detect.dialog.component.html',
})
export class HumanDetectDiaLog implements OnInit {
  messages$ = of([1648565547490, 1648565561178, 1648565569618, 1648565577864]);
  constructor(@Inject(MAT_DIALOG_DATA) public data: HumanDetectData) {}
  ngOnInit(): void {}
}
