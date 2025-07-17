import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

const { Title } = Typography;

const NewTask = () => {
    return (
        <div style={{ padding: '24px', maxWidth: 600, margin: '0 auto' }}>
            <Card
                title={<Title level={3} style={{ margin: 0, color: '#1890ff' }}>Nova Tarefa</Title>}
                style={{
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    borderRadius: '8px'
                }}
            >
                <Form
                    layout="vertical"
                    style={{ marginTop: '16px' }}
                >
                    <Form.Item
                        label="Task Name"
                        name="taskName"
                        rules={[{ required: true, message: 'Please enter the task name!' }]}
                    >
                        <Input
                            placeholder="Enter the task name"
                            size="large"
                            style={{ borderRadius: '6px' }}
                        />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 24, textAlign: 'right' }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            style={{
                                borderRadius: '6px',
                                paddingLeft: '32px',
                                paddingRight: '32px',
                                height: '40px'
                            }}
                        >
                            Add Task
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default NewTask;