import React from 'react';

type MessageProps = {
    text: string;
};

const Message: React.FC<MessageProps> = ({ text }) => {
    return <p>{text}</p>;
};

export default Message;
