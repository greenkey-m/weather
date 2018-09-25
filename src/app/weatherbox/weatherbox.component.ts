import {Component, OnInit} from '@angular/core';

import {OpenWeather} from '../weather';
import {LoadWeatherService} from '../loadweather.service';

@Component({
  selector: 'app-weatherbox',
  templateUrl: './weatherbox.component.html',
  styleUrls: ['./weatherbox.component.css']
})
export class WeatherboxComponent implements OnInit {

  weathers: OpenWeather[];

  town = ''; // selected town
  weatherdata: OpenWeather = {
    id: 1,
    main: {
      temp: 66,
      pressure: 66,
      humidity: 66
    },
    name: 'Default (delete!)'
  };
  // Выбирать из возвращаемого массива, когда name = town!!!!!!!!!!!!!!!!! и присваивать данные в weatherdata

  constructor(private loadWeatherService: LoadWeatherService) {
  }

  getWeathers(): void {
    this.loadWeatherService.getWeathers()
      .subscribe(weathers => this.weathers = weathers);
    this.loadWeatherService.getWeatherByName(this.town)
      .subscribe(weatherdata => this.weatherdata = weatherdata);
  }

  ngOnInit() {
    this.getWeathers();
  }

}
