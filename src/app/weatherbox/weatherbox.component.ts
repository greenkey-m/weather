import { Component, OnInit } from '@angular/core';
import { Owmdata } from '../owm';
import { OwmService } from '../owm.service';

@Component({
  selector: 'app-weatherbox',
  templateUrl: './weatherbox.component.html',
  styleUrls: ['./weatherbox.component.css']
})
export class WeatherboxComponent implements OnInit {

  public town = ''; // selected town
  public selected_weather: Owmdata;
  public temp: number;
  public pressure: number;
  public humidity: number;

  constructor(private _owm: OwmService) {
  }

  clearFields() {
    this.town = '';
    this.selected_weather.name = '';
  }

  searchWeather() {
    if (this.town === '') { return; }
    this._owm.searchRec(this.town).subscribe((data: Owmdata) => {
      // console.log(data);
      this.selected_weather = data;
      // Тут небольшой костыль - город может возвращаться только на английском, поэтому подменяем
      // его на то, что было введено в строке поиска.
      this.selected_weather.name = this.town;
    });
  }

  onEnter(event) {
    if (event.keyCode === 13) {
      this.searchWeather();
    }
  }

  ngOnInit() {
  }

}
