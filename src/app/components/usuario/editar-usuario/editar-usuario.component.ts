import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  public formGroupUser: FormGroup;
  public idUser: any;
  public user: any;

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService
  ) {
    this.user = new Object();
  }



  ngOnInit() {
    this.route.params.subscribe(params => this.idUser = params['id']);
    this.formGroupUser = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
    this.getUserById();
  }

  public async getUserById() {
    this.userService.getUsersById(this.idUser).subscribe(
      res => {
        this.user = res.user;
      }, err => { });
  }

  captureInformation() {
    if (this.formGroupUser.value.password === this.formGroupUser.value.confirmpassword) {
      const data = {
        email: this.formGroupUser.value.email,
        password: this.formGroupUser.value.password
      };
      this.updateUser(data);
    } else {
      this.generalService.abrirMensaje('Las contraseñas no coinciden', 'error');
    }
  }

  updateUser(data) {
    this.userService.updateUser(data).subscribe(
      res => {
        this.router.navigate(['/usuario']);
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }
}

