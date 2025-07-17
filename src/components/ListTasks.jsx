import React from 'react';
import { Card, List, Typography } from 'antd';

const { Title } = Typography;

const ListTasks = () => {
    return (
        <div style={{ padding: '24px', maxWidth: 600, margin: '0 auto' }}>  
            <Card
                title={<Title level={3} style={{ margin: 0, color: '#1890ff' }}>List Tasks</Title>}
                style={{
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    borderRadius: '8px'
                }}
            >
                <List
                    dataSource={[]}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta title={item.title} description={item.description} />
                        </List.Item>
                    )}
                />
            </Card>
        </div>
    )
}

export default ListTasks;