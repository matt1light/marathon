import React from 'react';

export const Card = (props) => {
    const {children, className} = props;

    return (
        <div className={`bg-gray-200 p-6 rounded-xl shadow-xl ${className}`}>
            {children}
        </div>
    )
}

export default Card;