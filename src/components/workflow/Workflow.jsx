import { Timeline } from "rsuite";
import { Typography } from "antd";
import CheckIcon from "@rsuite/icons/legacy/Check";
import "rsuite/dist/rsuite.min.css";
import "../../style/serviceLayout/workFlow.scss";

const Workflow = () => (
  <Timeline
    className="custom-timeline"
    style={{ marginTop: 20, marginBottom: 20 }}
  >
    <Timeline.Item>
      <Typography style={{ fontSize: "1.5rem" }}>WORKFLOW</Typography>
    </Timeline.Item>
    <Timeline.Item>
      <Typography>[Project Setup and Planning]</Typography>
      <Typography>
        Initialize project, set up environment, plan features.
      </Typography>
    </Timeline.Item>
    <Timeline.Item>
      <Typography>[Coding and Implementation]</Typography>
      <Typography>
        Write code, implement features, follow best practices.
      </Typography>
    </Timeline.Item>
    <Timeline.Item>
      <Typography>[Testing and Quality Assurance]</Typography>
      <Typography>
        Conduct thorough testing, debug issues, ensure quality.
      </Typography>
    </Timeline.Item>
    <Timeline.Item>
      <Typography>[Deployment and Maintenance]</Typography>
      <Typography>
        Launch product, monitor performance, provide ongoing support.
      </Typography>
    </Timeline.Item>
    <Timeline.Item dot={<CheckIcon className="custom-timeline-icon" />}>
      <Typography>Completed</Typography>
    </Timeline.Item>
  </Timeline>
);

export default Workflow;
