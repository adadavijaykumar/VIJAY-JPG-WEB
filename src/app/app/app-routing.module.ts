import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../auth.guard';
import { RoleGuardsGuard } from '../role-guards.guard';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserComponent } from '../user/user.component';
import { ForgotComponent } from '../forgot/forgot.component';

const routes: Routes = [
  {path:'', 
  component:LoginpageComponent, 
  },

{ path:'dashboard', 
  component:DashboardComponent, children:[
    {
      path:'user',
      component:UserComponent
    }
  ]
},
{
  path:'signUp',
  component:SignUpComponent
},
{
  path:'forgot',
  component:ForgotComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
