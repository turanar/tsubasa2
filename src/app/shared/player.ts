import {PlayerData} from "./playerdata";

export class Player {
  data: PlayerData = new PlayerData;

  constructor() {
  }

  calcul(stat: string, bonus: number): number {
    return this.precisionRound((this.data.base[stat]+this.data.training[stat]) *
      (100 + this.data.bonus['passive'][stat] + this.data.bonus['club'][stat] + this.data.bonus['formation'][stat]) / 100 + bonus, 0);
  }

  calcul_ts(value: number, stat: string): number {
    return this.precisionRound((value*(100 + this.data.bonus_skills['passive'][stat])/100 *
      (this.data.skills[stat] / 100)),0);
  }

  precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  get dribble(): number {
    return this.calcul('dribble',this.speed / 2);
  }

  get shot(): number {
    return this.calcul('shot', this.power / 2);
  }

  get pass(): number {
    return this.calcul('pass', this.technique / 2);
  }

  get tackle(): number {
    return this.calcul('tackle', this.speed / 2);
  }

  get block(): number {
    return this.calcul('block', this.power / 2);
  }

  get intercept(): number {
    return this.calcul('intercept', this.technique / 2);
  }

  get catch(): number {
    return this.calcul('catch',(this.power + this.technique) / 4);
  }

  get punch(): number {
    return this.calcul('punch',(this.power + this.speed) / 4);
  }

  get speed(): number {
    return this.calcul('speed', 0);
  }

  get power(): number {
    return this.calcul('power', 0);
  }

  get technique(): number {
    return this.calcul('technique', 0);
  }

  get dribble_ts(): number {
    return this.calcul_ts(this.dribble, 'dribble');
  }

  get shot_ts(): number {
    return this.calcul_ts(this.shot, 'shot');
  }

  get pass_ts(): number {
    return this.calcul_ts(this.pass, 'pass');
  }

  get tackle_ts(): number {
    return this.calcul_ts(this.tackle, 'tackle');
  }

  get block_ts(): number {
    return this.calcul_ts(this.block, 'block');
  }

  get intercept_ts(): number {
    return this.calcul_ts(this.intercept, 'intercept');
  }

  get catch_ts(): number {
    return this.calcul_ts(this.catch, 'catch');
  }

  get punch_ts(): number {
    return this.calcul_ts(this.punch, 'punch');
  }
}
