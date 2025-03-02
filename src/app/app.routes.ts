import { Routes } from '@angular/router';
import { UsersComponent } from './modules/users/users.component';

export const routes: Routes = [
  { path: "users-component", component: UsersComponent },
  { path: "**", redirectTo: "users-component" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
