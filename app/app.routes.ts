import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { WikiComponent } from './components/wiki/wiki.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'wiki',
        component: WikiComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
