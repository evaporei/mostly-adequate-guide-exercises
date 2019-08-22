// Write a natural transformation that converts `Either b a` to `Maybe a`

// eitherToMaybe :: Either b a -> Maybe a
const eitherToMaybe = either(() => Maybe.of(null), Maybe.of);
