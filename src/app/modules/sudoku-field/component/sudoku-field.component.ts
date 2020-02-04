import { Component, HostBinding, ElementRef, AfterViewInit, HostListener, EventEmitter, Output } from '@angular/core';
import { SudokuFieldService } from './sudoku-field.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NumberDialogComponent } from './number-dialog.component';
import { SudokuField } from 'src/app/util';

@Component({
    selector: 'app-sudoku-field',
    templateUrl: './sudoku-field.component.pug',
    styleUrls: ['./sudoku-field.component.scss'],
})
export class SudokuFieldComponent {
    @Output()
    public readonly field: EventEmitter<SudokuField>;
    private readonly mField: SudokuField;

    constructor(public dialog: MatDialog,
        public elementRef: ElementRef) {
        this.mField = new SudokuField();
        this.field = new EventEmitter(false);
    }
    public onClickCell(x: number, y: number): void {
        const dialogRef: MatDialogRef<NumberDialogComponent> = this.dialog.open(NumberDialogComponent, {
            width: 'min(90vw,90vh)',
            height: 'min(90vw,90vh)',
            maxWidth: '360px',
            maxHeight: '360px',
            role: 'dialog'
        });
        dialogRef.afterClosed().subscribe((value) => {
            if (value >= 0 && value <= 9) {
                this.mField.setCell(x, y, value);
                this.field.emit(this.mField.clone());
            }
        })
    }

    public getValue(x: number, y: number): string {
        return this.mField.getCell(x, y) > 0 ? '' + this.mField.getCell(x, y) : ' ';
    }

    public clearField(): void {
        this.mField.clear();
        this.field.emit(this.mField);
    }
}
