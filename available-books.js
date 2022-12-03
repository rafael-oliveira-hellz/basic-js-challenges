class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Fora de Estoque";
    } else if (this.numCopies < 10) {
      return "Estoque baixo";
    }
    return "Em estoque";
  }

  sell(numSold = 1) {
    this.numCopies -= numSold;
  }

  restock(numCopies = 5) {
    this.numCopies += numCopies;
  }
}

const HungerGames = new Book(
  "The Hunger Games",
  "Suzanne Collins",
  "9780439023528",
  5
);

console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);
