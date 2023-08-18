import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Incio', url: 'home', icon: 'home' },
    { title: 'Jugadores', url: 'jugadores', icon: 'person' },
    { title: 'Equipos', url: 'equipos', icon: 'people-circle' },
    { title: 'Estadisticas', url: 'estadisticas', icon: 'analytics' },
    { title: 'Campeon', url: 'campeon', icon: 'trophy' },
    { title: 'cerrar sesion', url: 'login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
