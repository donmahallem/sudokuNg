import { Component } from '@angular/core';

@Component({
    selector: 'app-sudoku-field',
    templateUrl: './sudoku.component.pug',
    styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent {
    title = 'sudokuNg';
    public setValue(x: number, y: number, value: number): void {
        console.log(x, y, value);
    }
}
