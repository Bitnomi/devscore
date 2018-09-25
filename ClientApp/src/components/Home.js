import React, { Component } from 'react';
import './home.css'
// import { Modal, Button } from 'antd';
import { Icon } from 'antd';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      visible: false,
    }

    this.showModal = this.showModal.bind(this);
  }

  showModal = () => {
    this.setState((state) => ({visible: true}));
  };

  handleOk = () => {
    this.setState((state) => ({loading: true}));
    setTimeout(() => {
      this.setState((state) => ({ loading: false, visible: true }));
    }, 3000);
  }

  handleCancel = () => {
    this.setState((state) => ({ visible: false }));
  }

  displayName = Home.name

  render() {
    const { visible, loading } = this.state;

    return (
      <div>
      <div className="homeContainer">
        <h1>Welcome to DevScore your home to crypto!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        <p>To help you get started, we've also set up:</p>
        </ul>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
        </ul>

        <div className="motto">
          safe and reliable , 0 transactions fees , 24 hours customer support
        </div>

        <div className="aboutus">
          <small>
          Founded in 2018 .xxx is a world Digital Asset exchange provider. Our Core Team originates with vast experience in finance and internet security companies as well and include early adopters of Cryptocurrency . With the emergence of a new digital world , 
xxx continues to provide the best experience with our platform as an easy , fast and open way for digital assets exchange .
          </small>
        </div>
      </div>
      
      <div className="footer">
      <hr/>
        <legend>DevScore Coin</legend>

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