import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  state = {
    date: null,
  };
// https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/56356209
  handleChange = async date => {
    // fetch('http://localhost:8080/play?url="https://cdn.apps.playnetwork.com/master/65e2c70ba416c00cf710bc3dc698c38108c19ccf778aabe36098d8d1d225fb5a.ogg?Signature=BxTi7I9Xevq3BnS74XemBXUMb-jyCl8Qh7lGSaUdmR6WOINPDyIiRi196tSI7XVHU~6UPwxgONAYjUbkclNb1bRcqDgLVw~ZV8su7EjMKjaXaukrGESfTC5c-JZd29Ny4ZXmVcahJXc-E-pGjr0SPhpSt0r5~Em7WHHJs3zReHQWa5LJACRZ9u5DVT4PeMLTUcH0rqOiLj3rGAPiqOA8~B7JsAnLQcatMnQFu9FqYxznWtOcFacLskzPVOSC4jzpaI~PEu6ifGXphG9VZ4SxUuLTgVJxksyzy1pquXfFwcSnUPaVyaZ5HVudT2RCVHsxBn1uP-vXCyX3EVcW3jseHQ__&Key-Pair-Id=APKAJ4GOPJEICF5TREYA&Expires=1579984449"', {
    //     method: "post",
    //     mode: "no-cors",
    //     headers: {
    //         'Authorization': '2e8d7cd2f48c9a0ab93d2c45a73013de'
    //     }
    // })
    fetch("https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/56356209", {
        method: "get",
        mode: "no-cors",
        headers: {
            'Authorization': '2e8d7cd2f48c9a0ab93d2c45a73013de'
        }
    })
      .then(res => res.json())
      .catch(console.log);
  };

  render() {
    const { date } = this.state;
    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
          </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Button type="primary" style={{ marginLeft: 8 }} onClick={this.handleChange}>
                    Primary Button
                </Button>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ConUHacks V Project Submission by the Elite Four</Footer>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));