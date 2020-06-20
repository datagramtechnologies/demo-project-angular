import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './_component/dashboard/dashboard.component';
import { islogin } from './_guards/islogin.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    islogin,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
