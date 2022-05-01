import avatar from "./index.vue";
avatar.install = (app) => {
  app.component("avatar", avatar);
};
export default avatar;
