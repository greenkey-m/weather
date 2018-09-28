import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'WEATHER SPA';
  private default = 'default';

  tabs = [];
  selected = new FormControl(0);

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('ru');
    translate.use('ru');
    translate.get('WEATHER').subscribe((str: string) => {
      this.default = str;
      this.tabs.push(this.default);
    });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

  addTab() {
    this.tabs.push(this.default);
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}


