import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../shared/comment/comment.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit, OnDestroy {
  comment: any = {};
  patientId: number;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commentService: CommentService,
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon(
      'cancel',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/cancel-24px.svg')
    );
    matIconRegistry.addSvgIcon(
      'delete',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/delete-24px.svg')
    );
    matIconRegistry.addSvgIcon(
      'save',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/save-24px.svg')
    );
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.patientId = id;
      if (id) {
        this.commentService.get(id).subscribe((comment: any) => {
          if (comment) {
            this.comment = comment;
            this.comment.href = comment._links.self.href;
          } else {
            console.log(`Comment with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/comment-list', this.comment.patientId]);
  }

  save(ngForm: NgForm) {
    this.commentService.save(ngForm).subscribe(result => {
      this.gotoList();
      }, error => console.error(error));
  }

  remove(href) {
    this.commentService.remove(href).subscribe(result => {
      this.gotoList();
      }, error => console.error(error));
  }
}
