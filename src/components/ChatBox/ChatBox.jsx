import React from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const Chatbox = () => {
  // Hàm để thêm phản hồi khi người dùng gửi tin nhắn
  const handleNewUserMessage = (newMessage) => {
    // Xử lý tin nhắn từ người dùng
    console.log(`New message incoming! ${newMessage}`);
    
    // Thêm phản hồi từ bot
    addResponseMessage("Thank you for your message! We will get back to you shortly.");
  };

  return (
    <div className="fixed bottom-100 right-5"> {/* Thay đổi vị trí của chatbox */}
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Chat with us"
        subtitle="We're here to help"
      />
    </div>
  );
};

export default Chatbox;
