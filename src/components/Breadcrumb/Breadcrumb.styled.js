import styled from 'styled-components';

const StyledBreadcrumb = styled.ol`
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin: 0;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.375rem;

    .breadcrumb-item + .breadcrumb-item::before {
        content: "/";
        padding: 0 0.5rem;
        color: #6c757d;
    }

    .breadcrumb-item a {
        color: #0d6efd;
        text-decoration: none;
    }

    .breadcrumb-item.active {
        color: #6c757d;
    }
`;

export { StyledBreadcrumb };