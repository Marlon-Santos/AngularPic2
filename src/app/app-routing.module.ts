import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/resolver/photo-list.resolver';
import { SingInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: SingInComponent,
  },
  {
    path: 'user/:userName/photos',
    component: PhotoListComponent,
    resolve: { photoListResolver: PhotoListResolver },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
