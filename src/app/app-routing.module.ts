import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/patient-list', pathMatch: 'full' },
  { path: 'patient-list', component: PatientListComponent },
  { path: 'patient-details/:id', component: PatientDetailsComponent },
  { path: 'patient-add', component: PatientEditComponent },
  { path: 'patient-edit/:id', component: PatientEditComponent },
  { path: 'comment-list/:id', component: CommentListComponent },
  { path: 'comment-details/:id', component: CommentDetailsComponent },
  { path: 'comment-add/:id', component: CommentAddComponent },
  { path: 'comment-edit/:id', component: CommentEditComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
