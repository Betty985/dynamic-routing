import sweepstake from "./index.vue";
sweepstake.install = (app) => {
  app.component("sweepstake", sweepstake);
};
export default sweepstake;
