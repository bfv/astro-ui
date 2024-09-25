import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
    { path: 'main', component: MainPageComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', redirectTo: '/main', pathMatch: 'full' }
];
