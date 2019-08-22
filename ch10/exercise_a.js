// Write a function that adds two possibly null numbers together using `Maybe` and `ap`.

// safeAdd :: Maybe Number -> Maybe Number -> Maybe Number
const safeAdd = (maybeNumber1, maybeNumber2) =>
  Maybe.of(add).ap(maybeNumber1).ap(maybeNumber2);
