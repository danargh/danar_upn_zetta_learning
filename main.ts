function tambah(a: string, b: number, c: number) {
   return a.slice(b, c);
}

const result: string = tambah(
   "Learning Typescript is different than Javascript",
   9,
   19
);
console.log(result);
