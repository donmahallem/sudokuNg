import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
} from '@angular/material';
import { SudokuFieldComponent } from './component';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        SudokuFieldComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
    ], exports: [
        SudokuFieldComponent
    ]
})
export class SudokuFieldModule { }
