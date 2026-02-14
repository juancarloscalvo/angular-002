import { Routes } from '@angular/router';
import { PostList } from './pages/posts-list/posts-list';
import { PostDetail } from './pages/post-detail/post-detail';
import { PostForm } from './pages/post-form/post-form';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostList },
  { path: 'posts/new', component: PostForm },
  { path: 'posts/:id/edit', component: PostForm },
  { path: 'posts/:id', component: PostDetail },
  { path: '**', redirectTo: 'posts' },
];