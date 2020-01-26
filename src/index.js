import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Input, Layout, List, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

class App extends React.Component {
    state = {
        listData: [],
    }

// https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/56356209
  handleChange = async () => {
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

  pauseMusic = async () => {
    fetch('http://localhost:8080/pause', {
      method: "post",
      mode: "no-cors",
      headers: {
        'Authorization': '2e8d7cd2f48c9a0ab93d2c45a73013de'
      }
    })
    .then(res => res.json())
    .catch(console.log);
  };

  unpauseMusic = async () => {
    fetch('http://localhost:8080/unpause', {
      method: "post",
      mode: "no-cors",
      headers: {
        'Authorization': '2e8d7cd2f48c9a0ab93d2c45a73013de'
      }
    })
    .then(res => res.json())
    .catch(console.log);
  };

  getPlayerStatus = async () => {
    fetch('http://localhost:8080/status', {
      method: "post",
      mode: "no-cors",
      headers: {
        'Authorization': '2e8d7cd2f48c9a0ab93d2c45a73013de'
      }
    })
    .then(console.log)
    .catch(console.log);
  };

  search = async value => {
    if (value.length > 0) {
      fetch("https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs?query=" + value, {
        method: "get",
        mode: "no-cors",
        headers: {
            'Authorization': '2e8d7cd2f48c9a0ab93d2c45a73013de'
        }
    })
      .then(res => res.json())
      .catch(console.log);
    }
  };

  render() {
      
    return (
        <Layout className="layout">
        <Header style={{ zIndex: 1, padding: '10px', height: 80, textAlign: 'center'}}>
          <div className="logo" />
          <Search
              placeholder="input search text"
              style={{width: 600}}
              onSearch={value => this.search(value)}
            />
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <List
                dataSource={this.listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <img
                                src={item.picture}
                            />
                        }
                    >
                        <List.Item.Meta
                            title={item.title}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
            <div style={{ background: '#fff', padding: 24, minHeight: '800' }}>
                <Button type="primary" style={{ marginLeft: 8 }} onClick={this.handleChange}>
                    Primary Button
                </Button>
                <Button type="danger" style={{ marginLeft: 8 }} onClick={this.getPlayerStatus}>
                    Player Status
                </Button>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <Button type="primary" shape="circle" size="large" icon="pause" style={{backgroundColor: 'black'}} onClick={this.pauseMusic}/>
          <Button type="primary" shape="circle" size="large" icon="caret-right" style={{backgroundColor: 'black'}} onClick={this.unpauseMusic}/>
          <Button type="primary" shape="circle" size="large" icon="forward" style={{backgroundColor: 'black'}}/>
          <p>ConUHacks V Project Submission by the Elite Four</p>
        </Footer>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));