export const capitalizeFirstLetter = (str: string): string => {
  return str.trim().charAt(0).toUpperCase() + str.slice(2);
};

export const removeExtraPunctuations = (str: string): string => {
  const regex = /\,\.|\!\.|\;\./g;
  return str.replace(regex, ".");
}