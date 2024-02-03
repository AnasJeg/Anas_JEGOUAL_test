import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';

import { LoginComponent } from './login/login.component';
// ngZorro
import { NzTableModule } from 'ng-zorro-antd/table'; 
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzPaginationModule } from 'ng-zorro-antd/pagination'
import { NzStepsModule } from 'ng-zorro-antd/steps'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzSliderModule } from 'ng-zorro-antd/slider'
import { NzSwitchModule } from 'ng-zorro-antd/switch'
import { NzUploadModule } from 'ng-zorro-antd/upload'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCarouselModule } from 'ng-zorro-antd/carousel'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzDrawerModule } from 'ng-zorro-antd/drawer'
import { NzMessageModule } from 'ng-zorro-antd/message'
import { NzNotificationModule } from 'ng-zorro-antd/notification'
import { NzProgressModule } from 'ng-zorro-antd/progress'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTimelineModule } from 'ng-zorro-antd/timeline'
import {  NzCalendarModule } from 'ng-zorro-antd/calendar'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker'
import { NzInputNumberModule } from 'ng-zorro-antd/input-number'
import { NzTransferModule } from 'ng-zorro-antd/transfer'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzResultModule } from 'ng-zorro-antd/result'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FuelComponent } from './pages/fuel/fuel.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzSpaceModule,
    NzButtonModule,
    NzLayoutModule,
    NzDropDownModule,
    NzMenuModule,
    NzPaginationModule,
    NzStepsModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzSliderModule,
    NzSwitchModule,
    NzUploadModule,
    NzAvatarModule,
    NzBadgeModule,
    NzCardModule,
    NzCarouselModule,
    NzTableModule,
    NzTabsModule,
    NzDrawerModule,
    NzMessageModule,
    NzNotificationModule,
    NzProgressModule,
    NzDividerModule,
    NzRadioModule,
    NzToolTipModule,
    NzTimelineModule,
    NzCalendarModule,
    NzModalModule,
    NzTimePickerModule,
    NzTransferModule,
    NzInputNumberModule,
    NzModalModule,
    NzPopconfirmModule,
    NzGridModule,
    NzEmptyModule,
    NzResultModule,
    NzSpinModule,
    NzPopoverModule,
    NzDescriptionsModule,
    NzPageHeaderModule,
    NzCollapseModule,
    NzCheckboxModule,
    NzTagModule,
    NzSkeletonModule,
    NzAlertModule,
    IconsProviderModule,
    NzIconModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
