import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home';
import { NotFoundComponent } from './modules/not-found';

const appRoutes: Routes = [
    {
        component: HomeComponent,
        path: '',
    },
    {
        loadChildren: () => import('./modules/play/play.module').then((m) => m.PlayModule),
        path: 'play',
    },
    {
        loadChildren: () => import('./modules/solve/solve.module').then((m) => m.SolveModule),
        path: 'solve',
    }, {
        component: NotFoundComponent,
        path: '**',
    },
];

@NgModule({
    exports: [
        RouterModule,
    ],
    imports: [
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabled'
        }),
    ],
})
export class AppRoutingModule { }
