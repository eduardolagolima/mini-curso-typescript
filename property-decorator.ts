function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: Você não pode criar ${key} menor que ${length}.`);
      } else {
        val = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  @minLength(5)
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const movie = new Movie("Interstellar");
console.log(movie.title);
