export const to = <T, U = Error>(
  promise: Promise<T>,
  errorExt: object
): Promise<[U, undefined] | [null, T]> => {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const errorMsg = Object.assign({}, err, errorExt);
        return [errorMsg, undefined];
      }

      return [err, undefined];
    })
};