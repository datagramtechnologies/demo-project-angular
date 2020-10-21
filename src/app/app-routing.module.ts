import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_component/login/login.component';
import { DashboardComponent } from './_component/dashboard/dashboard.component';
import { islogin } from './_guards/islogin.guard';
import { QuestionFourComponent } from './_component/question-four/question-four.component';
import { QuestionTwoComponent } from './_component/question-two/question-two.component';
import { QuestionThreeComponent } from './_component/question-three/question-three.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'QuestionFour', component: QuestionFourComponent},
  { path: 'QuestionTwo', component: QuestionTwoComponent},
  { path: 'QuestionThree', component: QuestionThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
