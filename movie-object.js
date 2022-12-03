class Movie {
  constructor(title, director, genre, releaseYear, rating, allRatings) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
    this.allRatings = new Array(allRatings);

  }

  get overview() {
    return this.getOverview();
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
  }

  toggleCheckOutStatus() {  
    this.isCheckedOut = !this.isCheckedOut;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  get rating() {
    return this._allRatings;
  }

  set rating(value) {
    this._allRatings = value;
  } 

  getAverageRating() {
    let ratingsSum = 0;

    let filteredRating = this.allRatings.filter(function (el) {
      return el != null;
    });

    for (const element of filteredRating) {
        ratingsSum += element;
    }

    return (ratingsSum / filteredRating.length).toFixed(2);
  }

  addRating(value) {
    this.allRatings.push(value);
  }
}

const speed = new Movie("Speed", "Jan de Bont", "action", 1994, 84.0);
speed.toggleCheckOutStatus();
console.log("isCheckedOut? ", speed.isCheckedOut);
speed.getOverview();
speed.addRating(85.0);
speed.addRating(89.0);
speed.addRating(63.0);
console.log("all ratings: ", speed.allRatings);
console.log("Overview: ", speed.overview);
console.log("rating length: ", speed.allRatings.length);
console.log("Média de Avaliação: ", speed.getAverageRating());
