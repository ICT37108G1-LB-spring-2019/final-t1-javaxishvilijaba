import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'gallery', component: GalleryComponent,
  },
  {
    path: 'preview/:id', component: PreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
