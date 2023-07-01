const a = 1;
const b = 2;
const c = 3;

(function firstFunction() {
  const b = 5;
  const c = 6;

  (function secondFunction() {
    const b = 8;

    (function thirdFunction() {
      const a = 1;
      const c = 6;

      (function fourthFunction() {
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
      })();
    })();
  })();
})();