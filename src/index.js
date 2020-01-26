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
    fetch('http://localhost:8080/play?url="https://cdn.apps.playnetwork.com/master/f16eab6a338175b348175d820c29dc2a00d6c813133a7236dcc4998d92f65b06.ogg?Signature=fWmsccD6XZE91WkNzrXoSzQq9poTT55hCX~ifNOiWqO~W0N9SFBJC1ucUYgosqjDiJsx3RnK-FJpY-RlEhBcePiBPGP6OiO9zrcHobM7H186tFTiJhZCG0DrtJ3d1ePARIaB74j~v33hnZAplxa0pLbKvBaj63kXNDGRWdDnR-tD~hOikvvwajkpip0sfOJkCPAEZKM9aGccgqtQjwJ3f6xiW7Cgm95frarhhxDLw2bWRlkZlrwFiR2y-OMHrbfIoAANV7GC3oaZ2Lb9n0khi96HNXYgIll2L4xqnaVNvLYrEWj08Cr9zru8sJHTGQD2chKje58zhDHwQi9qMWmNnA__&Key-Pair-Id=APKAJ4GOPJEICF5TREYA&Expires=1580013259"', {
        method: "post",
        mode: "no-cors",
        headers: {
            'Authorization': '2e8d7cd2f48c9a0ab93d2c45a73013de'
        }
    })
    // fetch("https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/56356209", {
    //     method: "get",
    //     mode: "no-cors",
    //     headers: {
    //         'Authorization': '2e8d7cd2f48c9a0ab93d2c45a73013de'
    //     }
    // })
      .then(res => res.json())
      .catch(console.log);
  };

  stopMusic = async () => {
    fetch('http://localhost:8080/stop', {
      method: "post",
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
          <Button type="primary" shape="circle" size="large" icon="fast-backward" style={{backgroundColor: 'black'}}/>
          <Button type="primary" shape="circle" size="large" icon="stop" style={{backgroundColor: 'black'}} onClick={this.stopMusic}/>
          <Button type="primary" shape="circle" size="large" icon="pause" style={{backgroundColor: 'black'}} onClick={this.pauseMusic}/>
          <Button type="primary" shape="circle" size="large" icon="caret-right" style={{backgroundColor: 'black'}} onClick={this.unpauseMusic}/>
          <Button type="primary" shape="circle" size="large" icon="fast-forward" style={{backgroundColor: 'black'}}/>
          <p>ConUHacks V Project Submission by the Elite Four</p>
        </Footer>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));