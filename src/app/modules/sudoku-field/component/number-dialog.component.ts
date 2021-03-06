import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-number-dialog',
    templateUrl: './number-dialog.component.pug',
    styleUrls: ['./number-dialog.component.scss'],
})
export class NumberDialogComponent {

    constructor(public dialogRef: MatDialogRef<NumberDialogComponent>) { }

}
