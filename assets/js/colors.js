const colorMap = {
  green: "#64d583",
  blue: "#91a8f9",
  orange: "#ee955e",
  pink: "#ee92d7",
  purple: "#aa8ef0",
  yellow: "#f5d770",
  default: "#64d583",
};

/**
 * Looks up a palette color by name, falling back to the default green.
 *
 * @param {string} colorName - The palette key to look up.
 * @returns {string} The matching hex color or the default hex color.
 */
function stringToHex(colorName) {
  const color = colorMap[colorName];

  return color || colorMap.default;
}

/**
 * Finds the first palette key whose hex value exactly matches the input.
 *
 * @param {string} hexValue - The hex value to match, including its leading `#`.
 * @returns {string|null} The matching palette key, or `null` if none matches.
 */
function hexToString(hexValue) {
  const colorString = Object.keys(colorMap).find((key) => {
    return colorMap[key] === hexValue;
  });

  return colorString || null;
}

/**
 * Removes every CSS class containing `_color_` from an element.
 *
 * @param {HTMLElement} element - The element whose class list is modified.
 * @returns {void} No value; modifies the element in place.
 */
function removeColorClasses(element) {
  [...element.classList].forEach((cls) => {
    if (cls.includes("_color_")) {
      element.classList.remove(cls);
    }
  });
}

export { stringToHex, hexToString, removeColorClasses };
