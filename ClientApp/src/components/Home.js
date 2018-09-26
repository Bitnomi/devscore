import React, { Component } from 'react';
import './home.css'
// import { Modal, Button } from 'antd';
import { Icon } from 'antd';
import MyTable from './table';


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }



  displayName = Home.name

  render() {
    return (
      <div className="mainContainer">
      <div className="homeContainer">
        <h1>Welcome to DevScore your home to crypto!</h1>

        <MyTable/>

        <ul className="motto">
          <li>
          <Icon className="font24" type="safety" />
            <strong className="font24">
              Safe and Reliable
            </strong>
            <p className="font-gray">
            It’s a digital assets trusteeship platform. 0 transfer fees from Huobi OTC to Huobi Global Exchange. And we ensure that sellers have the stated amount of coin in their wallet before posting any advertisements
            </p>
          </li>
          <li>
          <Icon className="font24" type="eye-o" />
            <strong className="font24">
            0 transactions fees 
            </strong>
            <p className="font-gray">
            0 transaction fee for users to trade local currency to BTC/USDT/ETH
            </p>
          </li>
          <li>
          <Icon className="font24" type="customer-service" />
            <strong className="font24">
              24 hours customer support
            </strong>
            <p className="font-gray">
            24/7 professional customer support to attend to all your trading queries
            </p>
          </li>
        </ul>        

        <div className="aboutus">
          <small>
          Founded in 2018 .xxx is a world Digital Asset exchange provider. Our Core Team originates with vast experience in finance and internet security companies as well and include early adopters of Cryptocurrency . With the emergence of a new digital world , 
xxx continues to provide the best experience with our platform as an easy , fast and open way for digital assets exchange .
          </small>
        </div>
      </div>
      
      <div className="footer">
        <div className="footer-lol">Devscore Coin</div>
        <hr></hr>
        <ul id="horizontal-list">
          <li><a href="#">About us</a></li>
          <li><a href="#">Rate started</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Business Cooperation</a></li>
        </ul>
        <hr/>
        <ul className="horizontal-social">
          <li><Icon type="facebook" /></li>
          <li><Icon type="twitter" /></li>
          <li><Icon type="medium" /></li>
          <li><Icon type="android" /></li>
          <li><Icon type="apple" /></li>
          <li className="email">devscore@devscore.team</li>
        </ul>
      </div>
      </div>
    );
  }
};


export default Home;
{/* <Button type="primary" onClick={this.showModal}>
  Open modal with customaized Footer
</Button>

<Modal
  visible={ visible }
  title="Title"
  onOk = {this.handleOk}
  onCancel = { this.handleCancel }
  footer={[
    <Button key="back" onClick={this.handleCancel} >Return</Button>,
    <Button key="submit" type="primary" loading={loading } onClick={ this.handleOk }> Submit </Button>,
  ]}
>
  <p>Some content . . .</p>
</Modal> */}