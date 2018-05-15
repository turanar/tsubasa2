import { Stats} from './stats';
import { PlayerStats } from "./playerstats";

export class PlayerData {
  base: PlayerStats = new PlayerStats(5000);
  training: Stats = new Stats(0);
  skills: Stats = new Stats(100);

  bonus: {[key: string ]: Stats} = {
    'passive' : new Stats,
    'club' : new Stats,
    'formation': new Stats
  };

  bonus_skills : {[key: string ]: Stats} = {
    'passive' : new Stats
  };
}
