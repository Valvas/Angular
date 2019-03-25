class Attack
{
  name: string;
  power: number;
  accuracy: number;

  /**************************************************/

  constructor(name: string, power: number, accuracy: number)
  {
    this.name = name;
    this.power = power;
    this.accuracy = accuracy;
  }
}

export { Attack };
