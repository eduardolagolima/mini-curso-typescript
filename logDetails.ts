// type alias
type Uid = number | string;
type Platform = "Windows" | "Linux" | "macOS";

function logDetails(uid: Uid, item: string) {
  console.log({ uid, item });
}

function logInfo(uid: Uid, user: string) {
  console.log({ uid, user });
}

function renderPlatform(platform: Platform) {
  return platform;
}

logDetails(123, "shoes");
logDetails("123", "shoes");

logInfo(123, "Eduardo");
logInfo("123", "Eduardo");

renderPlatform("Windows");
renderPlatform("Linux");
