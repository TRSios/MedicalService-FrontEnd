import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';

import { CommentFilterPipe } from './comment-list/comment-filter.pipe';
import { PatientFilterPipe } from './patient-list/patient-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentDetailsComponent,
    CommentAddComponent,
    CommentEditComponent,
    PatientListComponent,
    PatientDetailsComponent,
    PatientEditComponent,
    CommentFilterPipe,
    PatientFilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
