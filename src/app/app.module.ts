import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_component/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './_component/dashboard/dashboard.component';
import { islogin } from './_guards/islogin.guard';
import { QuestionFourComponent } from './_component/question-four/question-four.component';
import { ApiInterceptor } from './_interceptors/api.interceptor';
import { QuestionTwoComponent } from './_component/question-two/question-two.component';
import { QuestionThreeComponent } from './_component/question-three/question-three.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    QuestionFourComponent,
    QuestionTwoComponent,
    QuestionThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    islogin,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
