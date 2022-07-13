const style = {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  opacity: 1,
  lineHeight: "22px",
  transform: "scale(1.75)",
  transformOrigin: "bottom left",
  transition: "transform 0.6s ease-in-out, opacity 0.6s ease-out",
  maxWidth: "300px",
  // transition: "font-size 0.35s",
  // fontSize: "24px",
};

const resetStyles = (array) => {
  array.map((item) => (item.style = "inherit"));
};

export const styleFirstItem = (array, transition) => {
  const [firstItem, ...rest] = array;
  resetStyles(rest);

  transition
    ? Object.assign(firstItem.style, style)
    : Object.assign(firstItem.style, { ...style, transition: "none" });
};

export const styleItem = (array, item) => {
  const childrenElements = convertToArray(item.parentElement.children);
  const styledItemIndex = childrenElements.indexOf(item);

  resetStyles(array);
  Object.assign(item.style, style);

  // ADD SPACING TO ABOVE ELEMENTS (NEEDED DUE TO USING TRANSFORM SCALE)
  childrenElements.map((element, i) => {
    const extraSpacing = item.clientHeight * 1.75 > 77;

    i < styledItemIndex &&
      Object.assign(element.style, {
        transform: `translateY(-${extraSpacing ? "2.5" : "1.5"}em)`,
      });
  });
};

export const convertToArray = (object) =>
  Object.keys(object).map((key) => object[key]);
