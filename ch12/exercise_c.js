// Considering the following functions:
//
//   readfile :: String -> String -> Task Error String
//   readdir :: String -> Task Error [String]
//
// Use traversable to rearrange and flatten the nested Tasks & Maybe

// readFirst :: String -> Task Error (Maybe (Task Error String))
const readFirst = compose(
  chain(traverse(Task.of, readfile('utf-8'))),
  map(safeHead),
  readdir
);
