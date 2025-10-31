
import React, { useState } from 'react';
import { Card, Row, Col, Table, Button, Modal, Timeline, Rate, Typography } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const CompletedClaimsDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deviceColumns = [
    { title: 'Device ID', dataIndex: 'id', key: 'id' },
    { title: 'Device Brand', dataIndex: 'brand', key: 'brand' },
    { title: 'Model', dataIndex: 'model', key: 'model' },
    { title: 'IMEI', dataIndex: 'imei', key: 'imei' },
    { title: 'Policy Document', dataIndex: 'policy', key: 'policy', render: () => <a href="#">View More</a> },
  ];

  const deviceData = [
    { id: '#0001', brand: 'Samsung', model: 'Galaxy S22', imei: '356789123456789' },
  ];

  const partiesColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'User Type', dataIndex: 'userType', key: 'userType' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone Number', dataIndex: 'phone', key: 'phone' },
  ];

  const partiesData = [
    { name: 'Davies', userType: 'Customer', email: 'X@gmail.com', phone: '08034299834' },
    { name: 'Mr Obi', userType: 'Sales & Repair', email: 'X@gmail.com', phone: '08034299834' },
    { name: 'Chuks', userType: 'Team Member', email: 'X@gmail.com', phone: '08034299834' },
  ];

  const claimsColumns = [
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  ];

  const claimsData = [
    { description: 'Screen Damage', amount: '₦50,000' },
    { description: 'Battery Issue', amount: '₦60,000' },
    { description: 'Service Fee', amount: '₦10,000' },
  ];

  return (
    <div style={{ padding: '24px', backgroundColor: '#f0f2f5' }}>
      <Card>
        <div style={{ backgroundColor: '#1890ff', color: 'white', padding: '10px', textAlign: 'center', marginBottom: '20px' }}>
          <Title level={4} style={{ color: 'white' }}>Repair Claim Details</Title>
        </div>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="Claim Information">
              <Text><strong>Claim ID:</strong> 12345678</Text><br />
              <Text><strong>Created On:</strong> 2025-01-15</Text><br />
              <Text><strong>Claim Type:</strong> Accidental Damage</Text><br />
              <Text><strong>Total Sum Insured:</strong> ₦10,000</Text><br />
              <Text><strong>Device Balance:</strong> ₦10,000</Text><br />
              <Text><strong>Status:</strong> Completed</Text><br />
              <Text><strong>Insurer:</strong> Axa Mansard</Text>
            </Card>
          </Col>

          <Col span={24}>
            <Card title="Device Information">
              <Table columns={deviceColumns} dataSource={deviceData} pagination={false} />
            </Card>
          </Col>

          <Col span={24}>
            <Card title="Parties">
              <Table columns={partiesColumns} dataSource={partiesData} pagination={false} />
            </Card>
          </Col>

          <Col span={24}>
            <Card title="Claims Information">
              <Table columns={claimsColumns} dataSource={claimsData} pagination={false} footer={() => (
                <div style={{ textAlign: 'right' }}>
                  <Text strong>Total: ₦120,000</Text><br />
                  <Text strong>Amount Payable by Insurer: ₦120,000</Text><br />
                  <Text strong  >Amount Payable by Mona: ₦120,000</Text>
                </div>
              )} />
            </Card>
          </Col>

          <Col span={24}>
            <Card title="Review Damage">
              <Button type="danger" icon={<PlayCircleOutlined />}>Watch Video</Button>
              <Title level={5}>General Description</Title>
              <Text><strong>When:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text><br />
              <Text><strong>Where:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text><br />
              <Text><strong>How:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Card>
          </Col>

          <Col span={24}>
            <Card>
              <Row>
                <Col span={18}>
                  <Title level={5}>John Doe</Title>
                  <Text>Claim ID: CL-134783</Text><br/>
                  <Text>Accidental Damage</Text>
                  <p>Aliyu did a great job assisting us with the repairs of my Iphone 13.</p>
                  <Rate disabled defaultValue={4.5} />
                  <Text>2 months ago</Text>
                </Col>
                <Col span={6} style={{ textAlign: 'center', backgroundColor: '#e6f7ff', borderRadius: '8px', padding: '10px' }}>
                  <Title level={2} style={{ color: '#1890ff' }}>4.5</Title>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Text><strong>Approved by:</strong> John Doe</Text><br />
            <Text><strong>Edited by:</strong> John Doe</Text><br/>
            <Text><strong>Date & Time:</strong> 25-02-2025 10:21</Text>
          </div>
          <Button type="primary" onClick={showModal}>Track Progress</Button>
        </div>
      </Card>

      <Modal title="Track Claim Progress" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Timeline>
          <Timeline.Item>Claim Submitted</Timeline.Item>
          <Timeline.Item>Under Review</Timeline.Item>
          <Timeline.Item>Approved</Timeline.Item>
          <Timeline.Item>Completed</Timeline.Item>
        </Timeline>
      </Modal>
    </div>
  );
};

export default CompletedClaimsDetails;
