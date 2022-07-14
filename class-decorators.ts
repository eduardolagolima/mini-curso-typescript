function Logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} - ${target}`);
  };
}

@Logger("awesome")
class ClassWithDecorator {}

// ----------

function setAPIVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

@setAPIVersion("1.0.0")
class API {}

console.log(new API());
