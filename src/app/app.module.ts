import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {OAuthModule, OAuthStorage} from 'angular-oauth2-oidc';
import {TranslateModule} from '@ngx-translate/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TableComponent} from './table/table.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SelectUserComponent} from './select-user/select-user.component';
import {FormsModule} from '@angular/forms';
import {ToastrComponent} from './toastr/toastr.component';
import {HttpInterceptorService} from './http-interceptor.service';
import {NavbarComponent} from './navbar/navbar.component';
import {LayoutComponent} from './layout/layout.component';
import {ProfileComponent} from './profile/profile.component';
import {SharedModule} from './shared/shared.module';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {LocationSelectorComponent} from './location-selector/location-selector.component';
import {LanguageSelectorComponent} from './language-selector/language-selector.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {FaqComponent} from './faq/faq.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InvitePlayerComponent} from './invite-player/invite-player.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {TimeZoneSelectorComponent} from './time-zone-selector/time-zone-selector.component';
import {ManagePushNotificationsComponent} from "./manage-push-notifications/manage-push-notifications.component";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    SelectUserComponent,
    ToastrComponent,
    NavbarComponent,
    LayoutComponent,
    ProfileComponent,
    UserMenuComponent,
    AboutComponent,
    ContactComponent,
    LocationSelectorComponent,
    LanguageSelectorComponent,
    PrivacyComponent,
    FaqComponent,
    InvitePlayerComponent,
    TimeZoneSelectorComponent,
    ManagePushNotificationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      useDefaultLang: true
    }),
    AppRoutingModule,
    NgbModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: true})
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: HttpInterceptorService},
    {provide: OAuthStorage, useFactory: () => localStorage},
    {provide: 'localStorage', useFactory: () => localStorage},
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
