import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { OpenWeather } from './weather';

import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class LoadWeatherService {

  // Urls to openweather service
  // private OpenWeatherUrlName = 'https://api.openweathermap.org/data/2.5/weather?appid=8a955705d003eae43e86cb1b7ea30019&q=';
  // private OpenWeatherUrlId = 'https://api.openweathermap.org/data/2.5/weather?appid=8a955705d003eae43e86cb1b7ea30019&id=';
  private OpenWeatherUrlName = 'api/weathers';
  private OpenWeatherUrlId = 'api/weathers';


  constructor(private http: HttpClient, private logService: LogService) { }

  getWeatherById(id: number): Observable<OpenWeather> {
    const url = `${this.OpenWeatherUrlId}/${id}`;

    return this.http.get<OpenWeather>(url).pipe(
      tap(_ => this.logService.add(`Load weather with id=${id}`)),
      catchError(this.handleError<OpenWeather>(`getHero id=${id}`))
    );
  }

  getWeatherByName(name: string): Observable<OpenWeather> {
    const url = `${this.OpenWeatherUrlName}/?name=${name}`;

    return this.http.get<OpenWeather>(url).pipe(
      tap(_ => this.logService.add(`Load weather with name=${name}`)),
      catchError(this.handleError<OpenWeather>(`getHero name=${name}`))
    );
  }

  getWeathers(): Observable<OpenWeather[]> {
    this.logService.add('Loading weathers');
    return this.http.get<OpenWeather[]>(this.OpenWeatherUrlId).pipe(
      tap(weathers => this.logService.add('load weathers')),
      catchError(this.handleError('getWeathers', []))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<OpenWeather[]> {
    if (!term.trim()) {
      // if empty
      return of([]);
    }
    return this.http.get<OpenWeather[]>(`${this.OpenWeatherUrlName}/?name=${term}`).pipe(
      tap(_ => this.logService.add(`found town matching "${term}"`)),
      catchError(this.handleError<OpenWeather[]>('searchWeather', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.logService.add(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
