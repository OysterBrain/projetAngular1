export class AppareilService {

  // tableau contenant tous les appareils
  appareils = [
    { name: 'Machine à laver',
      status: 'éteint'
    },
    { name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  // fonction qui allume tous les appareils
  switchOnAll() {

    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }
  // fonction qui eteint tous les appareils
  switchOffAll() {

    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
  // fonction qui allume un appareil en fonction de son index
  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
  }
  // fonction qui eteint un appareil en fonction de son index

  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
  }

}
