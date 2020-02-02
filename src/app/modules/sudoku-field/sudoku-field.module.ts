import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatDialogModule,
} from '@angular/material';
import { SudokuFieldComponent } from './component';
import { RouterModule } from '@angular/router';
import { NumberDialogComponent } from './component/number-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [
        SudokuFieldComponent,
        NumberDialogComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule
    ], exports: [
        SudokuFieldComponent
    ], entryComponents: [
        NumberDialogComponent
    ]
})
export class SudokuFieldModule { }
