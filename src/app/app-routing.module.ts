import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgainstTheVoidComponent } from './bands/against-the-void/against-the-void.component';
import { WolferComponent } from './bands/wolfer/wolfer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'wolfer', component: WolferComponent },
  { path: 'against-the-void', component: AgainstTheVoidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
