import smoke from "./index.vue";
smoke.install = (app) => {
  app.component("smoke", smoke);
};
export default smoke;
