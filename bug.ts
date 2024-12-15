function printName(name: string | null): void {
  console.log(name.toUpperCase());
}

printName(null); // This will cause a runtime error