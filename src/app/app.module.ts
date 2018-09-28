import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { MatSidenavModule, MatIconModule, MatListModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { WeatherboxComponent } from './weatherbox/weatherbox.component';
import { OwmService } from './owm.service';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';

@NgModule({
  declarations: [
    AppComponent,
    WeatherboxComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    HttpClientModule,

    HttpClientModule,
    NgProgressModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatTabsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
