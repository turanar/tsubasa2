export class PlayerStats {
  name: string;
  title: string;
  class: string;
  goal: boolean = false;

  dribble: number;
  shot: number;
  pass: number;

  tackle: number;
  block: number;
  intercept: number;

  punch: number;
  catch: number;

  speed: number;
  power: number;
  technique: number;

  stamina: number;

  constructor(init: number = 0) {
    this.dribble = init;
    this.shot = init;
    this.pass = init;
    this.tackle = init;
    this.block = init;
    this.intercept = init;
    this.catch = init;
    this.punch = init;
    this.speed = init;
    this.power = init;
    this.technique = init;
    this.stamina = init;
  }
}
