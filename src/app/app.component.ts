import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {BarraDeNavegacaoComponent} from "./barra-de-navegacao/barra-de-navegacao.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, BarraDeNavegacaoComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
