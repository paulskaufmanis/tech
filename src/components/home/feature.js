import { Col, Row } from "antd";
import React from "react";
import { Card } from "antd";

import image1 from "../../assets/images/modern-design.jpg";
import image2 from "../../assets/images/clean-design.jpg";
import image3 from "../../assets/images/great-support.jpg";
import image4 from "../../assets/images/easy-customise.jpg";
import image5 from "../../assets/images/unlimited-features.jpg";
import image6 from "../../assets/images/advanced-option.jpg";

const { Meta } = Card;

function AppFeature() {
  return (
    <div className="block featureBlock bgGray">
      <div className="container-fluid">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card hoverable cover={<img alt="Modern Design" src={image1} />}>
              <Meta title="Modern Design" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
