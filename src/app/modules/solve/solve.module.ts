import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
} from '@angular/material';
import { SolveComponent } from './component';
import { SolveRoutingModule } from './solve-routing.module';
import { SudokuFieldModule } from '../sudoku-field';
@NgModule({
    declarations: [
        SolveComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        SudokuFieldModule,
        SolveRoutingModule
    ],
})
export class SolveModule { }
