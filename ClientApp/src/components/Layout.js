import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import './carousel.css'
import { Table, Divider, Tag } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

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
            {this.props.children}
            <Table columns={columns} dataSource={data} size="middle" footer = {() => 'Footer'}/> 
          </Col>
        </Row>
        <Footer style={{ textAlign: 'center' }}>
          Our own Coin ©2018 Created by dp with arn
        </Footer>
      </Grid>
    );
  }
}
