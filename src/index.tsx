import React from 'react';
import { render } from 'react-dom';

import { Switch, message, Menu, Table } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons"

const { SubMenu } = Menu;

import RCTable from 'rc-table';

import './antd.less';


const UsesSubMenu = () => (
    <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
    >
        <SubMenu
            key="sub1"
            title={
                <span>
              <MailOutlined />
              <span>Navigation One</span>
            </span>
            }
        >
            <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
            key="sub2"
            title={
                <span>
              <AppstoreOutlined />
              <span>Navigation Two</span>
            </span>
            }
        >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
        </SubMenu>
        <SubMenu
            key="sub4"
            title={
                <span>
              <SettingOutlined />
              <span>Navigation Three</span>
            </span>
            }
        >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
    </Menu>
);

const UsesTable = () => (
    <Table
        dataSource={[
            {key: 0, title: "Item 1"},
            {key: 1, title: "Item 1"},
        ]}
        columns={[
            { dataIndex: "title", key: "title" }
        ]}
    />
);

const UsesRCTable = () => (
    <RCTable
        data={[
            {key: 0, title: "Item 1"},
            {key: 1, title: "Item 1"},
        ]}
        columns={[
            { dataIndex: "title", key: "title" }
        ]}
    />
);


const Root: React.FunctionComponent = () => {
    const [showSubMenu, setShowSubMenu] = React.useState<boolean>(false);
    const [showTable, setShowTable] = React.useState<boolean>(false);
    const [showRCTable, setShowRCTable] = React.useState<boolean>(false);
    return <>
        Toggle Ant Submenu <Switch checked={showSubMenu} onChange={setShowSubMenu}/>
        <br/>
        Toggle Ant Table<Switch checked={showTable} onChange={setShowTable}/>
        <br/>
        Toggle RCTable<Switch checked={showRCTable} onChange={setShowRCTable}/>
        { showSubMenu && <UsesSubMenu />}
        { showTable && <UsesTable />}
        { showRCTable && <UsesRCTable />}
    </>
};

render(<Root />, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
    (module as any).hot?.accept();
    message.info('Received hot update');
}
