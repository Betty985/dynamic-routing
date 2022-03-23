import toolTip from "./index.vue";
toolTip.install = (app) => {
  app.component("toolTip", toolTip);
};
export default toolTip;
