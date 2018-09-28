import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {Owmdata} from './owm';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwmService {

  // TODO вставить указатель языка - какой выбран в браузере, такой и добавлять
  private owmUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=8a955705d003eae43e86cb1b7ea30019&units=metric&lang=ru';

  constructor(private _http: HttpClient) {
  }

  public searchRec(search: string): Observable<Owmdata> {
    const url = `${this.owmUrl}&q=${search}`;

    // this.ngProgress.start();
    // return this._http.get<Owmdata>(url);

    // return this._http.get('owm.json');
    return this._http.get<Owmdata>(url, {
      reportProgress: true
    }).pipe(
      tap(_ => console.log(`loading town name=${search}`)),
      catchError(this.handleError<Owmdata>(`Town name=${search}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
