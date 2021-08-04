export enum Rank {
  Ace = 'Ace',
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Jack = 'Jack',
  Queen = 'Queen',
  King = 'King',
  High = 'High',
  Low = 'Low'
}

export const AllRanks = [
  Rank.Ace,
  Rank.Two,
  Rank.Three,
  Rank.Four,
  Rank.Five,
  Rank.Six,
  Rank.Seven,
  Rank.Eight,
  Rank.Nine,
  Rank.Ten,
  Rank.Jack,
  Rank.Queen,
  Rank.King,
  Rank.High,
  Rank.Low
];

export const StandardRanks = AllRanks.filter(r => r !== Rank.High).filter(r => r !== Rank.Low);
