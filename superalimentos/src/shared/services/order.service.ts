import { switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../../shared/interfaces/member';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private refresh$ = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}

  read$(): void {
    //read$(): Observable<Member[]> {
    //    return this.http.get<Order[]>(`${this._url}/orders`);
    // return this.refresh$.pipe(
    //   switchMap(() => this.http.get<Member[]>(`${this._url}/orders`))
    // );
  }
}
