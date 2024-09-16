import { Timeline } from "rsuite";
import { Typography } from "antd";
import CreditCardIcon from "@rsuite/icons/legacy/CreditCard";
import PlaneIcon from "@rsuite/icons/legacy/Plane";
import TruckIcon from "@rsuite/icons/legacy/Truck";
import UserIcon from "@rsuite/icons/legacy/User";
import CheckIcon from "@rsuite/icons/legacy/Check";
import "rsuite/dist/rsuite.min.css";

const Workflow = () => (
  <Timeline
    className="custom-timeline"
    style={{ marginTop: 20, marginBottom: 20 }}
  >
    <Timeline.Item dot={<CreditCardIcon />}>
      <Typography>WORKFLOW</Typography>
    </Timeline.Item>
    <Timeline.Item dot={<CreditCardIcon />}>
      <Typography>Your order starts processing</Typography>
    </Timeline.Item>
    <Timeline.Item dot={<PlaneIcon />}>
      <Typography>[In transit]</Typography>
      <Typography>Order has been shipped from Beijing to Shanghai</Typography>
    </Timeline.Item>
    <Timeline.Item dot={<TruckIcon />}>
      <Typography>[In transit]</Typography>
      <Typography>
        Sended from the Shanghai Container Center to the distribution center
      </Typography>
    </Timeline.Item>
    <Timeline.Item dot={<UserIcon />}>
      <Typography>[Delivery]</Typography>
      <Typography>
        Shanghai Hongkou District Company Deliverer: Mr. Li, currently sending
        you a shipment
      </Typography>
    </Timeline.Item>
    <Timeline.Item
      dot={<CheckIcon style={{ background: "#15b215", color: "#fff" }} />}
    >
      <Typography>Completed</Typography>
    </Timeline.Item>
  </Timeline>
);

export default Workflow;
