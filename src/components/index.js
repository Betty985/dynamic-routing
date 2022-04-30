import toolTip from "./toolTip";
import smoke from "./smoke";
import typewriter from "./typewriter";
export default {
  install(app) {
    app.use(toolTip).use(smoke).user(typewriter);
  },
};
