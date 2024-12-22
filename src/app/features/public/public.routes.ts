import { Routes } from "@angular/router";
import { HomeLayoutComponent } from "./home/home-layout.component";

export const ROUTES_PUBLIC: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeLayoutComponent,
        children: [
        ],
    },
    {
        path: 'aboutme',
        title: 'About Me',
    }
];