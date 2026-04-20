import styled, { css } from 'styled-components';

const StyledTabs = styled.div`
    width: 100%;
`;

const TabList = styled.div`
    display: flex;
    border-bottom: 1px solid #dee2e6;
`;

const TabButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    background: none;
    cursor: pointer;
    border-bottom: 2px solid transparent;

    ${({ active }) =>
        active &&
        css`
            border-color: #0d6efd;
            color: #0d6efd;
            font-weight: 500;
        `}

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `}
`;

const TabContent = styled.div`
    padding: 1rem 0;
`;

export { StyledTabs, TabList, TabButton, TabContent };