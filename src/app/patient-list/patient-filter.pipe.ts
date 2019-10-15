import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patientFilter'
})
export class PatientFilterPipe implements PipeTransform {
  transform(patients: any[], searchTerm: string): any[] {
    if ((!patients) || (!searchTerm)) {
      return patients;
    } else {
      return patients.filter(patient => patient.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
  }
}
