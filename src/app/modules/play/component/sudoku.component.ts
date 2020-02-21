import { Component } from '@angular/core';

@Component({
    selector: 'app-play',
    templateUrl: './sudoku.component.pug',
    styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent {
    title = 'sudokuNg';
    private field: number[][] = new Array(9).fill(0).map(val => new Array(9).fill(0));
    public setValue(x: number, y: number, value: number): void {
        console.log(x, y, value);
        this.field[x][y] = value;
        console.log(this.field);
    }
}
