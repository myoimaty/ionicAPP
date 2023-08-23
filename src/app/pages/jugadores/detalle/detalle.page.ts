import { Component, OnInit } from '@angular/core';
import { Jugador } from '../jugadores.models';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  jugador!: Jugador;

  constructor(private router:Router, private toastController:ToastController, private alertController:AlertController, private JugadoresService: JugadoresService, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param =>{
      const aux = param.get('id')
      if(aux){
        this.jugador = this.JugadoresService.getJugador(aux)
      }
    })
  }
  async mensajeToast(mensaje:string){
    const toast = await this.toastController.create({
      message:mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  async deleteJugador(){
    //this.mensajeToast("JUGADOR ELIMINADO")
    const alerta = await this.alertController.create({
      header:'Eliminar el jugador',
      message:'Estas srguro de eliminar el jugador',
      buttons:[
        {
          text:'Eliminar',
          handler:()=>{
            if(this.jugador && this.jugador.id !== undefined){
              this.JugadoresService.deleteJugador(this.jugador.id);
              this.router.navigate(['/jugadores']);
              this.mensajeToast("jugador eliminado");

            }
          }
        },
        {
          text:'cancelar',
          handler: ()=>{
            this.mensajeToast("accion cancelada")
          }
        }
      ]
    });
    await alerta.present();
    let resultado = await alerta.onDidDismiss();
}
}