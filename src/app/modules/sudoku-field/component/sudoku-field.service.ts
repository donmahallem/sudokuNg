import { Injectable } from '@angular/core';
import { from, Observable, Subscriber, BehaviorSubject } from 'rxjs';
import { catchError, map, tap, share } from 'rxjs/operators';
import { SudokuField } from 'src/app/util';
import { SudokuFieldModule } from '../sudoku-field.module';

@Injectable()
export class SudokuFieldService {

    private readonly mFieldSubject: BehaviorSubject<SudokuField>;
    private readonly mFieldObservable: Observable<SudokuField>;
    constructor() {
        this.mFieldSubject = new BehaviorSubject(new SudokuField());
        this.mFieldObservable = this.mFieldSubject
            .asObservable().pipe(share());
    }

    public setValue(x: number, y: number, value: number): void {
        this.mFieldSubject.next(this.mFieldSubject.value.setCell(x, y, value));
    }

    public get fieldObservable(): Observable<SudokuField> {
        return this.mFieldObservable;
    }
}