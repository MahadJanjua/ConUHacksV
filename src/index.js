import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Input, Layout, List } from 'antd';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

class App extends React.Component {
    state = {
        listData: [],
    }

// https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/56356209
  handleChange = async () => {
    fetch('http://localhost:8080/play?url=https://cdn.apps.playnetwork.com/master/f16eab6a338175b348175d820c29dc2a00d6c813133a7236dcc4998d92f65b06.ogg?Signature=EXQQk6YQFOzFI6VSzAISIJ5jD5p3fAalpypM-RxUnL1q8~x8JIF9Ozh~oZupXQ52CZKImFaO3cFZlbREbbTtkfNY7Ilw7ln0a6LSQTtFPTO7Ox7keatBL7t~Y4nLTX-H6Qsr2thNkacqjTxLorLoWzghb9aRRtnmd9OKw22Rx7EOlIpekdTpWMvGBUwOXGt94Y2Hjhw7f7L4JjASfOpDKxulwKAyntPDWP8UreWEk~E8Bco-Iz56fa-QMSBaK90i88Hl-xFufWd6sloQArO76zATjTReCx1DVFbfE-RoFT~2EWu3kprA-wpL1zHUzQnpR1l2-~3g73sVztdErgR6jg__&Key-Pair-Id=APKAJ4GOPJEICF5TREYA&Expires=1580014401', {
        method: "post",
        mode: "no-cors",
        headers: {
            'Authorization': '2e8d7cd2f48c9a0ab93d2c45a73013de'
        }
    })
      .then(res => res.json())
      .catch(console.log);
  };

  search = async value => {
    const AuthStr = '2e8d7cd2f48c9a0ab93d2c45a73013de';
    if (value.length > 0) {
        axios.get('https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/56356209', {
            'headers': { 'Authorization': AuthStr }
        })
        .then((response => {
            console.log(response.data);
        }))
        .catch((error) => {
            console.log(error);
        });
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
                                alt="bruh"
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