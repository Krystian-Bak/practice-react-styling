import React, { useState } from 'react';
import {
    StyledTabs,
    TabList,
    TabButton,
    TabContent
} from './Tabs.styled';

const Tabs = ({ children, defaultActiveKey }) => {
    const tabs = React.Children.toArray(children);

    const defaultIndex = tabs.findIndex(
        tab => tab.props.eventKey === defaultActiveKey
    );

    const [activeKey, setActiveKey] = useState(
        defaultIndex >= 0 ? defaultActiveKey : tabs[0]?.props.eventKey
    );

    const activeTab = tabs.find(tab => tab.props.eventKey === activeKey);

    return (
        <StyledTabs>
            <TabList>
                {tabs.map((tab, index) => (
                    <TabButton
                        key={tab.props.eventKey}
                        active={tab.props.eventKey === activeKey}
                        disabled={tab.props.disabled}
                        onClick={() => {
                            if (!tab.props.disabled) {
                                setActiveKey(tab.props.eventKey);
                            }
                        }}
                    >
                        {tab.props.title}
                    </TabButton>
                ))}
            </TabList>

            <TabContent>
                {activeTab}
            </TabContent>
        </StyledTabs>
    );
};

export default Tabs;