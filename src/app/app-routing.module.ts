import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/resolver/photo-list.resolver';
import { AuthGuard } from './core/guards/auth.guard';
import { SingInComponent } from './sign/sign-in/sign-in.component';
import { SignUpComponent } from './sign/sign-up/sign-up.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  {
    path: '',
    component: SignComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SingInComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
    ],
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
