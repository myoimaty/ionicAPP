import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from './jugadores.models';
import { JugadoresService } from 'src/app/services/jugadores.service';
@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {

  listaJugadores: Jugador[]=[];

  constructor(private router:Router, private JugadoresService: JugadoresService) { }

  ngOnInit() {
    //toma lo de jugadores services y los mete en lista jugadores
    this.listaJugadores = this.JugadoresService.getAll()
  }
  //metodo que se ejecuta al volver a la pagina
  ionViewWillEnter() {
    //toma lo de jugadores services y los mete en lista jugadores
    this.listaJugadores = this.JugadoresService.getAll()
  }
  addJugador(){
    this.router.navigate(['/agregar']);
  }
}
