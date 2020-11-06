import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EncryptService } from 'src/app/services/encrypt.service';
import { RequestService } from 'src/app/services/requestService';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent implements OnInit {

  public formGroupUser: FormGroup;
  public idRequest: any;
  public idUser: any;

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private readonly requestService: RequestService,
    private readonly encryptService: EncryptService
  ) {
    this.idUser = this.encryptService.getValue().user;
  }



  ngOnInit() {
    this.route.params.subscribe(params => this.idRequest = params['id']);
    this.formGroupUser = this.formBuilder.group({
      commentary: ['', Validators.required],
    });
  }


  captureInformation() {
    const data = {
      commentary: this.formGroupUser.value.commentary,
      request: this.idRequest,
      user: this.idUser._id
    };
    this.addCommentary(data);
  }

  addCommentary(data) {
    this.requestService.addCommentary(data).subscribe(
      res => {
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
        this.router.navigate(['/request']);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }

}
