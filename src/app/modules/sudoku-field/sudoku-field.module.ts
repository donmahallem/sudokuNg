import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SudokuFieldComponent } from './component';
import { RouterModule } from '@angular/router';
import { NumberDialogComponent } from './component/number-dialog.component';
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
