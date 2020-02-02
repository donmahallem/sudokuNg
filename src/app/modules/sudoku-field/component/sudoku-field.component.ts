import { Component } from '@angular/core';
import { SudokuFieldService } from './sudoku-field.service';
import { MatDialog } from '@angular/material';
import { NumberDialogComponent } from './number-dialog.component';

@Component({
    selector: 'app-sudoku-field',
    templateUrl: './sudoku-field.component.pug',
    styleUrls: ['./sudoku-field.component.scss'],
    providers: [
        SudokuFieldService
    ]
})
export class SudokuFieldComponent {
    constructor(public fieldService: SudokuFieldService,
        public dialog: MatDialog) {

    }
    public setValue(x: number, y: number, value: number): void {
        this.fieldService.setValue(x, y, value);
        const dialogRef = this.dialog.open(NumberDialogComponent, {
            height: '400px',
            width: '600px',
        });
    }
}
