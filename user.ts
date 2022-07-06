// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account1: AccountInfo = {
  id: 123,
  name: "Eduardo",
  email: "eduardo@teste.com",
};

const account2: AccountInfo = {
  id: 123,
  name: "Eduardo",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char1: CharInfo = {
  nickname: "eduardo",
  level: 100,
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 123,
  name: "Eduardo",
  email: "eduardo@teste.com",
  nickname: "eduardo",
  level: 100,
};
