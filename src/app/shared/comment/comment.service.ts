import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public API = '//localhost:8080';
  public COMMENT_API = this.API + '/comments';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.API + '/medical-service-comments');
  }

  get(id: string) {
    return this.httpClient.get(this.COMMENT_API + '/' + id);
  }

  save(comment: any): Observable<any> {
    let result: Observable<any>;
    if (comment.href) {
      result = this.httpClient.put(comment.href, comment);
    } else {
      result = this.httpClient.post(this.COMMENT_API, comment);
    }
    return result;
  }

  remove(href: string) {
    return this.httpClient.delete(href);
  }
}
