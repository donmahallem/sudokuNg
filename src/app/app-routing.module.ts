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
        RouterModule.forRoot(appRoutes),
    ],
})
export class AppRoutingModule { }
