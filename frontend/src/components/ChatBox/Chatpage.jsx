import React from "react";
import styles from "./Chatpage.module.css"; // Import CSS module

const ChatPage = () => {
  return (
    <>
      <div className={styles.chatPageContainer}>
        <div className={styles.sidebar}>
          <div className="sidebarbtn">
            <button className={styles.sidebarButton}>
              Fill contact details
            </button>
            <button className={styles.sidebarButton}>Payment details</button>
            <button className={styles.sidebarButton}>Help center!</button>
          </div>
        </div>

        <div className={styles.chatSection}>
          <div className={styles.chatbox}>
            <input
              type="text"
              className={styles.chatInput}
              placeholder="Chat with Farmer..."
            />
            <button className={styles.sealButton}>Seal Contract</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
