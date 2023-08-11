import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autor/pages/login/login.component';
import { AutorlistComponent } from './autor/pages/autorlist/autorlist.component';
import { CarritoComponent} from './autor/pages/carrito/carrito.component';
import { AuthGuard } from './guards/auth-guard.guard';

export const routes: Routes =[ 
  {//configuracion de la ruta principal
      path:'',
      component: LoginComponent,
      pathMatch: 'full',
      // canActivate: [AuthGuard]
  },
  {
      path:'login',
      component: LoginComponent,
      pathMatch: 'full',
  },
  {
      path:'autorlist',
      component: AutorlistComponent,
      pathMatch: 'full'

  },
  {
      path:'carrito',
      component: CarritoComponent,
      pathMatch: 'full'
  },
  {//necesito procesar si la persona ingresa a una pagina de forma incorrecta, para eso es esta ruta
      path:'**',
      redirectTo:'login'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
