export function log(str: string) {
  console.log(str);
}

class A {
  greeting = "Hello there class";
}

log(new A().greeting);
