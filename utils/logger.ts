/* eslint-disable @typescript-eslint/no-explicit-any, no-console, @typescript-eslint/explicit-module-boundary-types */

const info = (...params: any): void => {
  if (process.env.NODE_ENV !== "test") {
    console.log(...params);
  }
};

const error = (...params: any): void => {
  console.log(...params);
};

export default {
  info,
  error,
};
