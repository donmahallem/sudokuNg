import { Injectable } from '@angular/core';
import { from, Observable, Subscriber } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SudokuField } from 'src/app/util';

@Injectable()
export class SudokuFieldService {

    private readonly mField: SudokuField
    constructor() {
        this.mField = new SudokuField();
    }

    public setValue(x: number, y: number, value: number): void {
        this.mField.setCell(x, y, value);
    }
}