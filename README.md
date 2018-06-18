# leadingZeroes()
Fill **strings** with leading zeroes respecting a desired length

# Install
```
npm install --save git+https://github.com/PiscoSistemas/LeadingZeroes-js
```

# Usage

### Javascript
```
require("leading-zeroes");
console.log("12345".leadingZeroes(10)); // >>> "0000012345"
console.log("1".leadingZeroes(2)); // >>> "01"
console.log("50".leadingZeroes(2)); // >>> "50"
console.log("ABC".leadingZeroes(4)); // >>> "0ABC"
```

### Typescript
```
import "leading-zeroes";
console.log("12345".leadingZeroes(10)); // >>> "0000012345"
console.log("1".leadingZeroes(2)); // >>> "01"
console.log("50".leadingZeroes(2)); // >>> "50"
console.log("ABC".leadingZeroes(4)); // >>> "0ABC"
```