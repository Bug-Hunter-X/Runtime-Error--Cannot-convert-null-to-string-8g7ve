function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}

printName(null); // This will now print 'Name is null'

function printNameOptional(name: string | null): void {
  console.log(name?.toUpperCase() || 'Name is null');
}

printNameOptional(null); // This will also print 'Name is null' 