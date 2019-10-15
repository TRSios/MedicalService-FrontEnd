import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentFilter'
})
export class CommentFilterPipe implements PipeTransform {
  transform(comments: any[], searchTerm: number): any[] {
    return comments.filter(comment => comment.patientId == searchTerm);
  }
}
