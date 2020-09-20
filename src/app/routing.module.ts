import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { ProjectsComponent } from './components/projects/projects.component';import { ROUTES } from '@angular/router';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'collaborators', component: CollaboratorsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: '**', pathMatch: 'full', redirectTo: '/home'},
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule{}
