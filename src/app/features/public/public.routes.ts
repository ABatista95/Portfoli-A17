import { Routes } from "@angular/router";
import { PublicLayoutComponent } from "./public-layout.component";
import { HomeComponent } from "./home/home.component";

export const ROUTES_PUBLIC: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                title: 'Home',
                component: HomeComponent
            },
            {
                path: 'aboutme',
                title: 'About Me',
                loadComponent: () => import('./about-me/about-me.component').then(c => c.AboutMeComponent)
            }
        ],
    },
    
];