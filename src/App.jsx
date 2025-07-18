import React, { useState } from 'react';
import './index.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import NewTask from './components/newTaks';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import ListTasks from './components/ListTasks';

const { Header, Content, Footer, Sider } = Layout;

function getItem(
  label,
  key,
  icon,
  children,
) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Home', '1', <DesktopOutlined/>),
  getItem('User', 'sub1', <UserOutlined />),
  
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <NewTask />
          <ListTasks />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Created by <a href="https://www.linkedin.com/in/gabriel-penke-953771206/">Gabriel Penke</a>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;