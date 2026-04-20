import React from 'react';

const BreadcrumbItem = ({ children, href, active, ...props }) => {
    return (
        <li
            className={`breadcrumb-item ${active ? 'active' : ''}`}
            aria-current={active ? 'page' : undefined}
        >
            {href && !active ? (
                <a href={href} {...props}>
                    {children}
                </a>
            ) : (
                children
            )}
        </li>
    );
};

export default BreadcrumbItem;