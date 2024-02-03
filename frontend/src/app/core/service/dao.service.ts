import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationValue } from '../model/pagination';
import { Pagination } from '../model/request';

@Injectable({
  providedIn: 'root'
})
export abstract class DaoService<T> {
  protected API = environment.URL;

  protected constructor(API: string, public http: HttpClient) {
      this.API += API;
  }

  findAll(pageable: Pagination): Observable<PaginationValue<T>> {
    return this.http.get<PaginationValue<T>>(this.API , {
        params: {
            'page': pageable.page,
            'size': pageable.size
        }
    });
}
  create(d: T): Observable<T> {
      return this.http.post<T>(this.API + 'save', d);
  }

  update(d: T): Observable<T> {
      return this.http.put<T>(this.API + 'update', d);
  }


  delete_by_id(id: number): Observable<T> {
      return this.http.delete<T>(this.API + `delete?id=${id}`);
  }

  getById(id: any): Observable<T> {
      return this.http.get<T>(this.API + `get?id=${id}`);
  }

}
