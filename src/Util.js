export const BASEURL = "https://polls.apiblueprint.org";

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
