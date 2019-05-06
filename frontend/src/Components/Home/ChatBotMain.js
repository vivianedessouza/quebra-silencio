import React, { Component } from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import "./Profile.scss";

import "stream-chat-react/dist/css/index.css";

const chatClient = new StreamChat("qk4nn7rpcn75");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmxvcmFsLWNyZWRpdC0wIn0.3sxCA3ImJLhyxLyhCDm26R4noWizzPLNnkRvE8BdnjU";
chatClient.setUser(
  {
    id: "floral-credit-0",
    name: "Floral credit",
    image:
      "https://getstream.io/random_svg/?id=floral-credit-0&name=Floral+credit"
  },
  userToken
);

const channel = chatClient.channel("messaging", "godevs", {
    
  // add as many custom fields as you'd like
  image:
    "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
  name: "Talk about Go"
});

export class ChatBotMain extends Component {
  render() {
    return (
      <div>
        <Chat client={chatClient} theme={"messaging light"}>
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </div>
    );
  }
}

export default ChatBotMain;
