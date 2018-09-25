import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const weathers = [
      {
        id: 1,
        main: {
          temp: 55,
          pressure: 77,
          humidity: 770
        },
        name: 'Moscow'
      },
      {
        id: 2,
        main: {
          temp: 55,
          pressure: 770,
          humidity: 170
        },
        name: 'Omsk'
      },
      {
        id: 3,
        main: {
          temp: 33,
          pressure: 150,
          humidity: 340
        },
        name: 'Malo'
      }
    ];
    return {weathers};
  }
}
