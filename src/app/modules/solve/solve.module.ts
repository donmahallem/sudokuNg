import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
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
        SolveRoutingModule,
        MatToolbarModule,
        MatIconModule
    ],
})
export class SolveModule { }
