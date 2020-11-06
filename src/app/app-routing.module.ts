import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { AgregarUsuarioComponent } from './components/usuario/agregar-usuario/agregar-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EliminarUsuarioComponent } from './components/usuario/eliminar-usuario/eliminar-usuario.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';
import { CanActivateViaAuthGuard } from './services/canActivateService';
import { CostumerComponent } from './components/costumer/costumer/costumer.component';
import { AddCostumerComponent } from './components/costumer/add-costumer/add-costumer.component';
import { UpdateCostumerComponent } from './components/costumer/update-costumer/update-costumer.component';
import { DeleteCostumerComponent } from './components/costumer/delete-costumer/delete-costumer.component';
import { InsuranceComponent } from './components/insurance/insurance/insurance.component';
import { AddInsuranceComponent } from './components/insurance/add-insurance/add-insurance.component';
import { UpdateInsuranceComponent } from './components/insurance/update-insurance/update-insurance.component';
import { DeleteInsuranceComponent } from './components/insurance/delete-insurance/delete-insurance.component';
import { InsurancecustomerComponent } from './components/insurance-customer/insurancecustomer/insurancecustomer.component';
import { AddinsurancecustomerComponent } from './components/insurance-customer/addinsurancecustomer/addinsurancecustomer.component';
import {
  UpdateinsurancecustomerComponent
} from './components/insurance-customer/updateinsurancecustomer/updateinsurancecustomer.component';
import {
  DeleteinsurancecustomerComponent
} from './components/insurance-customer/deleteinsurancecustomer/deleteinsurancecustomer.component';
import { ServiceComponent } from './components/service/service/service.component';
import { AddServiceComponent } from './components/service/add-service/add-service.component';
import { UpdateServiceComponent } from './components/service/update-service/update-service.component';
import { DeleteServiceComponent } from './components/service/delete-service/delete-service.component';

import { TechnicalComponent } from './components/technical/technical/technical.component';
import { AddTechnicalComponent } from './components/technical/add-technical/add-technical.component';
import { UpdateTechnicalComponent } from './components/technical/update-technical/update-technical.component';
import { DeleteTechnicalComponent } from './components/technical/delete-technical/delete-technical.component';

import { AddRequestComponent } from './components/request/add-request/add-request.component';
import { UpdateRequestComponent } from './components/request/update-request/update-request.component';
import { DeleteRequestComponent } from './components/request/delete-request/delete-request.component';
import { RequestComponent } from './components/request/request/request.component';

import { CommentaryComponent } from './components/request/commentary/commentary/commentary.component';
import { DetailRequestComponent } from './components/request/detail-request/detail-request.component';







const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: '', component: LoginComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario/agregar', component: AgregarUsuarioComponent },
  { path: 'usuario/eliminar/:id', component: EliminarUsuarioComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'usuario/editar/:id', component: EditarUsuarioComponent, canActivate: [CanActivateViaAuthGuard] },

  { path: 'costumer', component: CostumerComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'costumer/add', component: AddCostumerComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'costumer/delete/:id', component: DeleteCostumerComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'costumer/update/:id', component: UpdateCostumerComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'insurance', component: InsuranceComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'insurance/add', component: AddInsuranceComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'insurance/delete/:id', component: UpdateInsuranceComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'insurance/update/:id', component: DeleteInsuranceComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'insurance/customer', component: InsurancecustomerComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'insurance/customer/add', component: AddinsurancecustomerComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'insurance/customer/delete/:id', component: DeleteinsurancecustomerComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'insurance/customer/update/:id', component: UpdateinsurancecustomerComponent, canActivate: [CanActivateViaAuthGuard] },

  { path: 'service', component: ServiceComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'service/add', component: AddServiceComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'service/delete/:id', component: DeleteServiceComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'service/update/:id', component: UpdateServiceComponent, canActivate: [CanActivateViaAuthGuard] },

  { path: 'technical', component: TechnicalComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'technical/add', component: AddTechnicalComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'technical/delete/:id', component: DeleteTechnicalComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'technical/update/:id', component: UpdateTechnicalComponent, canActivate: [CanActivateViaAuthGuard] },

  { path: 'request', component: RequestComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'request/add', component: AddRequestComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'request/delete/:id', component: DeleteRequestComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'request/update/:id', component: UpdateRequestComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'request/detail/:id', component: DetailRequestComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'request/add/commentary/:id', component: CommentaryComponent, canActivate: [CanActivateViaAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
