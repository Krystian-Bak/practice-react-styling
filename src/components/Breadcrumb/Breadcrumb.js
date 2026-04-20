import React from 'react';
import { StyledBreadcrumb } from './Breadcrumb.styled';

const Breadcrumb = ({ children, ...props }) => {
    return (
        <StyledBreadcrumb aria-label="breadcrumb" {...props}>
            {children}
        </StyledBreadcrumb>
    );
};

export default Breadcrumb;