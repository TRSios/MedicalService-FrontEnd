import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { PatientService } from '../shared/patient/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Array<any>;
  searchTerm: string;

  constructor(
    private patientService: PatientService,
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
      'clear',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/clear-24px.svg')
    );
    matIconRegistry.addSvgIcon(
      'person',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/person-24px.svg')
    );
    matIconRegistry.addSvgIcon(
      'person-add',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/person_add-24px.svg')
    );
    matIconRegistry.addSvgIcon(
      'search',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/search-24px.svg')
    );
  }

  ngOnInit() {
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    });
  }
}
