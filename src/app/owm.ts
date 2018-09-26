export class Owmdata {
  id: number;
  name: string;
  main: {
    temp: number,
    pressure: number,
    humidity: number
  };
}
