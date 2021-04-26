import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmDetailComponent } from './farms/farm-detail/farm-detail.component';
import { FarmListComponent } from './farms/farm-list/farm-list.component';
import { FarmRegisterComponent } from './farms/farm-register/farm-register.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: FarmListComponent },
  { path: 'cadastro/:id', component: FarmRegisterComponent },
  { path: 'fazenda/:id', component: FarmDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
