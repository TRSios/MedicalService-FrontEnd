import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../shared/comment/comment.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnDestroy {
  comment: any;
  comments: Array<any>;
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
      'add-comment',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/add_comment-24px.svg')
    );
    matIconRegistry.addSvgIcon(
      'cancel',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/cancel-24px.svg')
    );
    matIconRegistry.addSvgIcon(
      'mode-comment',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/mode_comment-24px.svg')
    );
  }

  ngOnInit() {
    this.commentService.getAll().subscribe(data => {
      this.comments = data;
    });
    this.subscription = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.patientId = id;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/patient-list']);
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
