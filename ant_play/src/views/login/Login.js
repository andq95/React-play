import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import './Login.css'

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    constructor() {
        super();
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleLogin() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        console.log(this.props.form.getFieldValue('username'))
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Card className='login-card'>
                <p className='login-card-title'>Accounting</p>
                <hr />
                <br />
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {
                            getFieldDecorator('username', {
                                rules: [{
                                    type: 'string',
                                    initialValue: '',
                                    required: true,
                                    message: 'Please enter your user name'
                                }]
                            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)
                        }
                    </FormItem>
                    <FormItem >
                        {
                            getFieldDecorator('password', {
                                rules: [{
                                    type: 'string',
                                    initialValue: '',
                                    required: 'true',
                                    message: 'Please enter your password'
                                }]
                            })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)
                        }

                        <a className="login-form-forgot" href="">Forgot password</a>
                        <br />
                        <Button type="primary" className="login-form-button" onClick={this.handleLogin}>
                            Log in
                            </Button>
                        <br />
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </Card>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm