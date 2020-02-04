import { Component, ViewChild, ViewChildren } from '@angular/core';
import { SudokuComponent } from '../../play/component';
import { SudokuFieldComponent } from '../../sudoku-field';

@Component({
    selector: 'app-solve',
    templateUrl: './solve.component.pug',
    styleUrls: ['./solve.component.scss']
})
export class SolveComponent {

    @ViewChild(SudokuFieldComponent, {
        static: true
    })
    public sudokuComponent: SudokuFieldComponent;
    constructor() { }

    public clearField(): void {
        this.sudokuComponent.clearField();
    }
}
