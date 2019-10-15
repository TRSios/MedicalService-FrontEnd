import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { NgForm } from '@angular/forms';
import { PatientService } from '../shared/patient/patient.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit, OnDestroy {
  patient: any = {};
  patientId: number;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
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
      'delete',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/delete-24px.svg')
    );
    matIconRegistry.addSvgIcon(
      'edit',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/edit-24px.svg')
    );
    matIconRegistry.addSvgIcon(
      'mode-comment',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/mode_comment-24px.svg')
    );
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.patientId = id;
      if (id) {
        this.patientService.get(id).subscribe((patient: any) => {
          if (patient) {
            this.patient = patient;
            this.patient.href = patient._links.self.href;
          } else {
            console.log(`Patient with id '${id}' not found, returning to list`);
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
    this.router.navigate(['/patient-list']);
  }

  save(ngForm: NgForm) {
    this.patientService.save(ngForm).subscribe(result => {
      this.gotoList();
      }, error => console.error(error));
  }

  remove(href) {
    this.patientService.remove(href).subscribe(result => {
      this.gotoList();
      }, error => console.error(error));
  }
}
