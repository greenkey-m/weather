export class Owmdata {
  id: number;
  name: string;
  weather: [{
    id: number,
    main: string,
    description: string,
    icon: string
  }];
  main: {
    temp: number,
    pressure: number,
    humidity: number
  };
}
