import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import './carousel.css'
import { Table, Divider, Tag } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card } from 'antd';

const { Header, Content, Footer } = Layout;

//  import Footer from './footer';


const columns = [
  {
  title: 'Username',
  dataIndex: 'username',
  },
  {
  title: 'Credibility',
  dataIndex: 'credibility',
  },
  {
  title: 'Payment Methods',
  dataIndex: 'payment_methods',
  },
  {
    title: 'Quota',
    dataIndex: 'quota',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
  },
  {
    title: 'Selling Price',
    dataIndex: 'selling_price',
  },

];

const data = [{
  //key: '1',
  username: 'Xin Yang',
  credibility: 32,
  payment_methods: 'bankcards',
  quota: '10-50000CNY',
  amount: '28.2ETH',
  selling_price: '1196.41CNY'
}, {
  //key: '2',
  username: 'Bill Gates',
  credibility: 64,
  payment_methods: 'bankcards',
  quota: '134-50342CNY',
  amount: '13.35ETH',
  selling_price: '15465.357CNY'
}, {
 // key: '3',
  username: 'Vladimir Putin',
  credibility: 142,
  payment_methods: 'bankcards',
  quota: '696-74521CNY',
  amount: '7895.215ETH',
  selling_price: '842.7454CNY'
}];

export class MyComp extends Component {
  displayName = Layout.name   

  render() {
    return (
      <Grid fluid>
        <Row>
          <NavMenu />

          <Col sm={6}>
            <Carousel>
                <div><img src="B:\Shall\work\devscore\ClientApp\public\2938.jpg" alt=""/></div>
                <div><h3>2<img src="B:\Shall\work\devscore\ClientApp\public\2938.jpg" alt=""/></h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
            <Table columns={columns} dataSource={data} size="middle" footer = {() => 'Footer'}/> 
            {this.props.children}
            
            <div style={{ background: '#ECECEC', padding: '30px' }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Safe Reliable" bordered={false}>It's a digital assets trueteeship platform. 0 transfer fees from Huobi OTC to Huoibi GLobal Exchange. And We ensure that their wallet before posting any advertisement</Card>
                </Col>
                <Col span={8}>
                  <Card title="0 Transaction Free" bordered={false}>0 transaction fee for users to trade local currency to BTC/USD/ETH</Card>
                </Col>
                <Col span={8}>
                  <Card title="24 hours Customer Support" bordered={false}>24/7 Professional customer support to attend to all your trading queries</Card>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>
        <Footer style={{ textAlign: 'center' }}>
          Our own Coin ©2018 Created by dp with arn
        </Footer>
      </Grid>
    );
  }
}
