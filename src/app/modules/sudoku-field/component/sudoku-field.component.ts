import { Component, HostBinding, ElementRef, AfterViewInit, HostListener, EventEmitter } from '@angular/core';
import { SudokuFieldService } from './sudoku-field.service';
import { MatDialog } from '@angular/material';
import { NumberDialogComponent } from './number-dialog.component';
import { SudokuField } from 'src/app/util';

@Component({
    selector: 'app-sudoku-field',
    templateUrl: './sudoku-field.component.pug',
    styleUrls: ['./sudoku-field.component.scss'],
    providers: [
        SudokuFieldService
    ]
})
export class SudokuFieldComponent implements AfterViewInit {
    constructor(public fieldService: SudokuFieldService,
        public dialog: MatDialog,
        public elementRef: ElementRef) {

    }
    public readonly field: EventEmitter<SudokuField> = new EventEmitter(false);
    @HostListener('window:resize', ['$event'])
    public onResize(event): void {
        this.recalculateDimensions();
    }
    public onClickCell(x: number, y: number): void {
        this.fieldService.setValue(x, y, 0);
        const dialogRef = this.dialog.open(NumberDialogComponent, {
            height: '400px',
            width: '600px',
        });
    }

    public ngAfterViewInit(): void {
        this.recalculateDimensions();
    }

    public recalculateDimensions(): void {
        const cmpWidth: number = Math.floor(this.elementRef.nativeElement.offsetWidth / 9);
        const cmpHeight: number = Math.floor(this.elementRef.nativeElement.offsetHeight / 9);
        this.elementRef.nativeElement.style.setProperty("--field-size", Math.min(cmpWidth, cmpHeight) + "px");
    }
}
