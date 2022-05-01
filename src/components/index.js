import toolTip from "./toolTip";
import smoke from "./smoke";
import sweepstake from "./sweepstake";
export default {
  install(app) {
    app.use(toolTip).use(smoke).use(sweepstake);
  },
};
