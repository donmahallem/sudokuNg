import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home';

const appRoutes: Routes = [
    {
        component: HomeComponent,
        path: '',
    },
    {
        loadChildren: () => import('./modules/play/play.module').then((m) => m.PlayModule),
        path: 'play',
    }, {
        loadChildren: () => import('./modules/play/play.module').then((m) => m.PlayModule),
        path: '**',
    },
];

@NgModule({
    exports: [
        RouterModule,
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
})
export class AppRoutingModule { }
