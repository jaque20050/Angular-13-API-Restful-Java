import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder, //Criar e mapear nosso formulário
    private snakcBar: MatSnackBar, // Exibir mensagem de erro ou sucesso na tela
    /*private router: Router*/
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({//Passamos um objeto Json com toda a configuração do nosso formulário.
      //Passamos um Array de parametros.
      email: ['', [Validators.required, Validators.email]],//Obrigatorio a entrada de email e senha, então irão validar os dados.
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar() {
    if (this.form.invalid) {// Sempre será invalido sempre que os validadores não sejam atendidos. 
      this.snakcBar.open(
        "Dados inválidos", "Erro", { duration: 5000 });
      return;
    }// Caso seja valido, ira exibir um alert dos dados.
    alert(JSON.stringify(this.form.value));
  }
}
