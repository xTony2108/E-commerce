export const internalMemory = {
  save: (key, value) => {
    if (!key || typeof key !== "string")
      throw new Error("Key must be a valid string!");
    if (value === undefined) throw new Error("Value cannot be undefined!");

    localStorage.setItem(key, JSON.stringify(value));
  },

  get: (key) => {
    if (!key || typeof key !== "string")
      throw new Error("Key must be a valid string!");

    return JSON.parse(localStorage.getItem(key));
  },

  remove: (key) => {
    if (!key || typeof key !== "string")
      throw new Error("Key must be a valid string!");

    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};
