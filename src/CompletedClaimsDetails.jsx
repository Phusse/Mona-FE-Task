import React, { useState } from 'react';
import {
  Card,
  Row,
  Col,
  Table,
  Button,
  Modal,
  Timeline,
  Rate,
  Typography,
  Tag,
  Progress,
} from 'antd';
import {
  PlayCircleOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const CompletedClaimsDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoClicked, setIsVideoClicked] = useState(false);
  const [isTrackClicked, setIsTrackClicked] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    setIsTrackClicked(true);
  };
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  const showVideo = () => {
    setIsVideoVisible(true);
    setIsVideoClicked(true);
  };
  const handleVideoClose = () => setIsVideoVisible(false);

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
    <div style={{ backgroundColor: '#f0f2f5'}} >
      <Card>
          <div style={{ backgroundColor: '#1677ff', color: 'white', padding: '24px', textAlign: 'center', marginBottom: '20px', marginTop: '-24px', marginLeft: '-24px', marginRight: '-24px' }}>
          <Title level={4} style={{ color: 'white', margin: 0 }}>Repair Claim Details</Title>
        </div>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="">
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
              <Table
                columns={claimsColumns}
                dataSource={claimsData}
                pagination={false}
                footer={() => (
                  <div style={{ textAlign: 'right' }}>
                    <Text strong>Total: ₦120,000</Text><br />
                    <Text strong>Amount Payable by Insurer: ₦120,000</Text><br />
                    <Text strong style={{ color: '#1677ff' }}>Amount Payable by Mona: ₦120,000</Text>
                  </div>
                )}
              />
            </Card>
          </Col>

          <Col span={24}>
            <Card
              title={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Review Damage</span>
                  <Button
                    type="default"
                    icon={<PlayCircleOutlined />}
                    onClick={showVideo}
                    style={{
                      color: isVideoClicked ? 'white' : '#ff4d4f',
                      borderColor: '#ff4d4f',
                      backgroundColor: isVideoClicked ? '#ff4d4f' : 'white',
                      transition: '0.3s ease',
                    }}
                  >
                    Watch Video
                  </Button>
                </div>
              }
            >
              <Title level={5}>General Description</Title>
              <div style={{ width: '100%' }}>
                <div style={{ marginBottom: '16px' }}>
                  <Text strong style={{ color: '#000', fontSize: '15px' }}>
                    When:
                  </Text>
                  <div
                    style={{
                      backgroundColor: '#e6f4ff',
                      color: '#1677ff',
                      fontWeight: 500,
                      borderRadius: 8,
                      padding: '12px 16px',
                      marginTop: '6px',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui non odio ultricies sollicitudin.
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <Text strong style={{ color: '#000', fontSize: '15px' }}>
                    Where:
                  </Text>
                  <div
                    style={{
                      backgroundColor: '#e6f4ff',
                      color: '#1677ff',
                      fontWeight: 500,
                      borderRadius: 8,
                      padding: '12px 16px',
                      marginTop: '6px',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt felis at viverra euismod.
                  </div>
                </div>

                <div>
                  <Text strong style={{ color: '#000', fontSize: '15px' }}>
                    How:
                  </Text>
                  <div
                    style={{
                      backgroundColor: '#e6f4ff',
                      color: '#1677ff',
                      fontWeight: 500,
                      borderRadius: 8,
                      padding: '12px 16px',
                      marginTop: '6px',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac orci sed metus facilisis accumsan.
                  </div>
                </div>
              </div>


            </Card>
          </Col>

          <Col span={24}>
            <Card
              style={{
                width: 400,
                background: '#fff',
                border: '1px solid #e6f7ff',
                borderRadius: '8px',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05)',
                padding: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',

                  width: '150px',
                  height: '15px',
                  background: '#1677ff',
                  top: '20px',
                  right: '-40px',
                  transform: 'rotate(45deg)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '150px',
                  height: '15px',
                  background: '#52c41a',
                  top: '40px',
                  right: '-40px',
                  transform: 'rotate(45deg)',
                }}
              ></div>

              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Title level={5} style={{ marginBottom: 4 }}>John Doe</Title>
                  <a href="#" style={{ color: '#1677ff', fontSize: 13 }}>Claim ID: CL-134763</a><br />
                  <Tag color="blue" style={{ marginTop: 6 }}>Accidental Damage</Tag>
                  <p style={{ marginTop: 8, fontSize: 14, color: '#555' }}>
                    Aliyu did a great job assisting us with the repairs of my iPhone 13.
                  </p>
                  <Rate disabled defaultValue={4.5} style={{ fontSize: 16 }} />
                  <div style={{ fontSize: 12, color: '#999' }}>2 months ago</div>
                </Col>

                <Col span={6} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      background: '#f6ffed',
                      borderRadius: '50%',
                      width: 75,
                      height: 75,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 'auto',
                    }}
                  >
                    <Title level={2} style={{ color: '#52c41a', margin: 0 }}>4.5</Title>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <Text><strong>Approved by:</strong> John Doe</Text><br />
            <Text><strong>Edited by:</strong> John Doe</Text><br />
            <Text><strong>Date & Time:</strong> 25-02-2025 10:21</Text>
          </div>

          <Button
            type="default"
            onClick={showModal}
            style={{
              color: isTrackClicked ? 'white' : '#1677ff',
              borderColor: '#1677ff',
              backgroundColor: isTrackClicked ? '#1677ff' : 'white',
              transition: '0.3s ease',
            }}
          >
            Track Progress
          </Button>
        </div>
      </Card>

      <Modal
        title={<Title level={4} style={{ marginBottom: 0 }}>Claim Progress Overview</Title>}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        footer={null}
      >
        <div style={{ padding: '10px 0' }}>
          <Progress percent={100} status="active" strokeColor="#1677ff" />
          <Timeline style={{ marginTop: 20 }}>
            <Timeline.Item dot={<ClockCircleOutlined style={{ color: '#faad14' }} />}>
              <Text strong>Claim Submitted</Text>
              <div><Text type="secondary">Jan 10, 2025 - 09:12 AM</Text></div>
            </Timeline.Item>
            <Timeline.Item dot={<SyncOutlined spin style={{ color: '#1890ff' }} />}>
              <Text strong>Under Review</Text>
              <div><Text type="secondary">Jan 12, 2025 - 02:30 PM</Text></div>
            </Timeline.Item>
            <Timeline.Item dot={<CheckCircleOutlined style={{ color: '#52c41a' }} />}>
              <Text strong>Approved</Text>
              <div><Text type="secondary">Jan 15, 2025 - 11:10 AM</Text></div>
            </Timeline.Item>
            <Timeline.Item color="green">
              <Text strong>Completed</Text>
              <div><Tag color="success">Success</Tag></div>
            </Timeline.Item>
          </Timeline>
        </div>
      </Modal>

      <Modal
        title="Damage Review Video"
        open={isVideoVisible}
        onCancel={handleVideoClose}
        footer={null}
        width={800}
      >
        <div style={{ textAlign: 'center' }}>
          <video width="100%" height="auto" controls>
            <source src="https://www.youtube.com/watch?v=IEqmSROj5Uc" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </Modal>
    </div>
  );
};

export default CompletedClaimsDetails;
