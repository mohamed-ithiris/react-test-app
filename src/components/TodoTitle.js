import PropTypes from "prop-types";
import { List } from 'antd';
import { Typography } from 'antd';
import React from 'react';


export default function TodoTitle({ title, size }) {
    const { Title } = Typography;
    return (
        <List
            size={size}
            bordered
        >
            <List.Item>
                <Title level={4}>
                    {title}
                </Title>
            </List.Item>
        </List>
    )
}

TodoTitle.propTypes = {
    title: PropTypes.string.isRequired,
}

TodoTitle.defaultProps = {
    size: "large"
}