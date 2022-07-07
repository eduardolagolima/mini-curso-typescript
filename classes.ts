class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    const { name, age } = this;
    console.log("logDetails", { name, age });
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;
  readonly guild: string;

  constructor(
    name: string,
    age: number,
    nickname: string,
    level: number,
    guild: string
  ) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
    this.guild = guild;
  }

  get getLevel() {
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }

  logCharDetails(): void {
    const { age, nickname, level } = this;
    console.log("logCharDetails", { age, nickname, level });
  }
}

const user = new UserAccount("Eduardo", 26);
console.log(user);
user.logDetails();

const char = new CharAccount("Eduardo", 26, "eduardo", 100, "guild");
console.log(char);
console.log(char.level);
console.log(char.guild);
char.logDetails();
char.logCharDetails();

char.setLevel = 200;
console.log(char.getLevel);
