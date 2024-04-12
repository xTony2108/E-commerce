import { lazy } from "react";

export const lazyLoad = (fileName, exportName, folder = "pages") => {
  return lazy(() => {
    let promise;
    if (folder === `pages`) {
      promise = import(`../pages/${fileName}.jsx`);
    } else promise = import(`../components/products/${fileName}.jsx`);
    if (!exportName) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[exportName] }));
    }
  });
};
