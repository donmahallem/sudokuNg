import { Component } from '@angular/core';
import { SudokuFieldService } from './sudoku-field.service';

@Component({
    selector: 'app-sudoku-field',
    templateUrl: './sudoku-field.component.pug',
    styleUrls: ['./sudoku-field.component.scss'],
    providers: [
        SudokuFieldService
    ]
})
export class SudokuFieldComponent {
    constructor(public fieldService: SudokuFieldService) {

    }
    public setValue(x: number, y: number, value: number): void {
        this.fieldService.setValue(x, y, value);
    }
}
