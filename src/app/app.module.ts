import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabGroup } from '@angular/material';
import { MatSidenavModule, MatIconModule, MatListModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { WeatherboxComponent } from './weatherbox/weatherbox.component';
import { OwmService } from './owm.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherboxComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    HttpClientModule,

    BrowserAnimationsModule,
    FormsModule,
    FormControl,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTabGroup,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatTreeModule,
    MatTabsModule
  ],
  providers: [
    OwmService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
