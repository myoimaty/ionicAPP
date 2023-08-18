import { Injectable } from '@angular/core';
import { Jugador } from '../pages/jugadores/jugadores.models';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  jugadores: Jugador[]=[
    {
      id: '1',
      nombre: 'lebron james',
      imagen: 'https://es.wikipedia.org/wiki/Archivo:LeBron_James_-_51959723161_(cropped).jpg',
      fecha: '2023',
      descripcion: 'taco bell',
    },
    {
      id: '2',
      nombre: 'Dennis Rodman',
      imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.cl%2Fpin%2F84512930496652378%2F&psig=AOvVaw0QQXowfCN7emKXTR_HpRxD&ust=1692455572010000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCJiiwsO25oADFQAAAAAdAAAAABAE',
      fecha: '2023',
      descripcion: 'ola',
    },
    {
      id: '3',
      nombre: 'Shaquille ONeal',
      imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fmundo%2Fdeportes-39872448&psig=AOvVaw11J9zYu2Cd5r1SpKsBBvlo&ust=1692455484190000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCNjH1KS25oADFQAAAAAdAAAAABAE',
      fecha: '2023',
      descripcion: 'stan twice',
    },
  ]

  constructor() { }
  //metodos custom

  //debuelve objeto completo
  getAll(){
    return[...this.jugadores]
  }
  //metodo que devuelve un jugador por la id
  getJugador(id: string){
    return{
      ...this.jugadores.find( aux =>{
        return aux.id === id
      })
    }
  }
}
