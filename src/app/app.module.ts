import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MDLUpgradeElementDirective } from './directives/MaterialDesignLiteUpgradeElement';
import { AboutComponent } from './components/about/about.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { CoreModule } from '@app-core/core.module';
import { AuthGuard } from '@app-core/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    MDLUpgradeElementDirective,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CoreModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
