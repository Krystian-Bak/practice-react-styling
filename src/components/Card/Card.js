import React from 'react';
import { StyledCard } from './Card.styled';

const Card = ({ children, variant = "secondary", ...props }) => {
// tutaj rowniez uzwywam warunkow początkowych, fajnie było by zrobić w rozszerzeniu aplikacji zmianę stylowania jasny/ciemny, widok dwu/jednokolumnowy
    return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;