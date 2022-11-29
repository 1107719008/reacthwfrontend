import { Row, Col } from "antd";
import InfoItem from "./InfoItem";

export default function InfoList({ infos, isLoading }) {

  return (
    <Row gutter={[32, 32]}>
      {infos.map(info => (
        <Col
          key={info.id}
          sm={{ span: 12 }}
          lg={{ span: 16 }}
          xl={{ span: 32 }}
          xxl={{ span: 32 }}
        >
          <InfoItem info={info} />
        </Col>
      ))}
    </Row>
  );
}

