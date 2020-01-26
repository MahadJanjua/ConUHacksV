import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Input, Layout, List } from 'antd';
const { Header, Footer } = Layout;
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
      .then(res => res.json())
      .catch(console.log);
  };

  stopMusic = async () => {
    fetch('http://localhost:8080/stop', {
      method: "post",
    })
    .then(res => res.json())
    .catch(console.log);
  };

  pauseMusic = async () => {
    fetch('http://localhost:8080/pause', {
      method: "post",
    })
    .then(res => res.json())
    .catch(console.log);
  };

  unpauseMusic = async () => {
    fetch('http://localhost:8080/unpause', {
      method: "post",
    })
    .then(res => res.json())
    .catch(console.log);
  };

  getPlayerStatus = async () => {
    fetch('http://localhost:8080/status', {
      method: "get",
    })
    .then(console.log)
    .catch(console.log);
  };

  search = async value => {
    if (value.length > 0) {
        axios.get('http://localhost:2800/songs', {params: {search: value}})
        .then(response => {
            this.setState({listData: response.data})
        })
        .catch((error) => {
            console.log(error);
        });
    }
  };

  playByID = async (ID) => {
      axios.get('http://localhost:2800/playByID', {params: {id: ID}})
        .then(response => {})
        .catch((error) => console.log(error))
  }

  render() {
      
    return (
        <Layout className="layout">
        <Header style={{ zIndex: 1, padding: '10px', height: 80, textAlign: 'center'}}>
            <span>country</span>
          <Search
              placeholder="input search text"
              style={{width: 600}}
              onSearch={value => this.search(value)}
            />
        </Header>
            {(this.state.listData.data) ||
            <List
                dataSource={this.state.listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        // extra={
                        //     <img
                        //         src={item.picture}
                        //         alt="bruh"
                        //     />
                        // }
                    >
                        <List.Item.Meta
                            title={item.title}
                            description={item.artistName}
                        />
                        <Button onClick={() => {this.playByID(item.id)}}>Play</Button>
                    </List.Item>
                )}
            />
        }
        <div>
          {
                !this.props.isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !this.props.isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
            ) : this.props.coords ? (
                <table>
                    <tbody>
                        <tr>
                            <td>latitude</td>
                            <td>{this.props.coords.latitude}</td>
                        </tr>
                        <tr>
                            <td>longitude</td>
                            <td>{this.props.coords.longitude}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <div>Getting the location data&hellip; </div>
            )
          }
        </div>
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