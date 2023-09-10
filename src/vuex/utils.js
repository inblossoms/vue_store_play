export function forEachValkey(obj, cb) {
  // mutation[key] => Fn , key
  Reflect.ownKeys(obj).forEach((key) => cb(obj[key], key));
}

// forEachValkey(mutations, function(mutationsFn, mutationsKey){})
