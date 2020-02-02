import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
} from '@angular/material';
import { NotFoundComponent } from './component';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule
    ],
})
export class NotFoundModule { }
