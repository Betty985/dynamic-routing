import toolTip from "./toolTip";
import smoke from "./smoke";
export default {
  install(app) {
    app.use(toolTip).use(smoke);
  },
};
