export const applySentenceCase = (str) => {
  return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
};

export const capitalizeFirstLetter = (string) => {
  return string.trim().charAt(0).toUpperCase() + string.slice(2);
};

export const removeExtraPunctuations = (str) => {
  const regex = /\,\.|\!\.|\;\./g;
  return str.replace(regex, ".");
}