import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public API = '//localhost:8080';
  public PATIENT_API = this.API + '/patients';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.API + '/medical-service');
  }

  get(id: string) {
    return this.httpClient.get(this.PATIENT_API + '/' + id);
  }

  save(patient: any): Observable<any> {
    let result: Observable<any>;
    if (patient.href) {
      result = this.httpClient.put(patient.href, patient);
    } else {
      result = this.httpClient.post(this.PATIENT_API, patient);
    }
    return result;
  }

  remove(href: string) {
    return this.httpClient.delete(href);
  }
}
