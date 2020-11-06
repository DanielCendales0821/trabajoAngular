import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ShContextMenuModule } from 'ng2-right-click-menu';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxPermissionsModule } from 'ngx-permissions';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { EliminarUsuarioComponent } from './components/usuario/eliminar-usuario/eliminar-usuario.component';
import { AgregarUsuarioComponent } from './components/usuario/agregar-usuario/agregar-usuario.component';
import { HeaderComponent } from './components/complements/header/header.component';
import { MenuComponent } from './components/complements/menu/menu.component';
import { FooterComponent } from './components/complements/footer/footer.component';
import { NotfoundComponent } from './components/complements/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
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
import { HTTPLoaderInterceptorService } from './utilities/http-loader-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EliminarUsuarioComponent,
    AgregarUsuarioComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    NotfoundComponent,
    LoginComponent,
    InicioComponent,
    EditarUsuarioComponent,
    CostumerComponent,
    AddCostumerComponent,
    UpdateCostumerComponent,
    DeleteCostumerComponent,
    InsuranceComponent,
    AddInsuranceComponent,
    UpdateInsuranceComponent,
    DeleteInsuranceComponent,
    InsurancecustomerComponent,
    AddinsurancecustomerComponent,
    UpdateinsurancecustomerComponent,
    DeleteinsurancecustomerComponent,
    ServiceComponent,
    AddServiceComponent,
    UpdateServiceComponent,
    DeleteServiceComponent,
    TechnicalComponent,
    AddTechnicalComponent,
    UpdateTechnicalComponent,
    DeleteTechnicalComponent,
    AddRequestComponent,
    UpdateRequestComponent,
    DeleteRequestComponent,
    RequestComponent,
    CommentaryComponent,
    DetailRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ShContextMenuModule,
    AngularEditorModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxCurrencyModule,
    NgxSpinnerModule,
    NgxPermissionsModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    DatePipe,
    CanActivateViaAuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPLoaderInterceptorService,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
