import React, { useState } from "react";
import { Modal, Button } from "antd";

function AppWorks() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it Works</h2>
          <p>An vim odio ocurreret consetetur, justo constituto ex mea</p>
        </div>
        <div className="contentHolder">
          <Button onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
        </div>

        <Modal
          title="Tutorial"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <iframe
            title="Woocommerce Tutorial"
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"
          ></iframe>
        </Modal>
      </div>
    </div>
  );
}

export default AppWorks;
