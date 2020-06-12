console.log(
  process.argv.slice(2).reduce(function (acc, curr) {
    return +acc + +curr;
  })
);
