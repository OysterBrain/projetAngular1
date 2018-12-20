import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {


  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppreil: number;

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit() {
  }
  // On récupère le status
  getStatus() {
    return this.appareilStatus;
  }


  // On choisi la couleur en fonction du status
  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  // On utilise appareilService pour allumer un appareil
  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppreil);
  }
  // On utilise appareilService pour eteindre un appareil

  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppreil);
  }
}
