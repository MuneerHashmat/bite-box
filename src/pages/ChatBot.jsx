import Navbar from "./../components/Navbar";
import { Send, AccountCircle } from "@mui/icons-material";
import assets from "../assets/assets";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Markdown from "react-markdown";
import { SyncLoader } from "react-spinners";
import "../utils/chatbot.css";

const ChatBot = () => {
  const apiKey = "AIzaSyByGcrMCfMKZNNta-wdWMeuPXPWlZWlt8Y";
  const genAI = new GoogleGenerativeAI(apiKey);
  const [chats, setChats] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const generteResponse = async (prompt) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response.text();
    console.log(responseText);
    return responseText;
  };

  const handleGenerateResponse = async (e) => {
    e.preventDefault();
    const newPrompt = { id: uuidv4(), prompt: true, content: prompt };
    setChats((prevChats) => [...prevChats, newPrompt]);
    setPrompt("");
    setLoading(true);

    const responseText = await generteResponse(prompt);
    const newResponse = { id: uuidv4(), prompt: false, content: responseText };
    setLoading(false);
    setChats((prevChats) => [...prevChats, newResponse]);
  };
  useEffect(() => {
    console.log(chats);
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <>
      <Navbar />
      <div className="fixed bottom-0 w-screen bg-white pb-2">
        <div className="w-[95vw] md:w-[65vw] rounded-full bg-gray-200 py-5 px-7 mx-auto">
          <form onSubmit={handleGenerateResponse} className="flex">
            <input
              placeholder="message BiteBot"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              type="text"
              className="outline-none bg-gray-200 w-[97%]"
            />

            <button className="hover:scale-[1.05] transition-all">
              <Send />
            </button>
          </form>
        </div>
      </div>

      <div className="content pt-24 w-[95vw] md:w-[63vw] mb-[100px] mx-auto flex flex-col gap-7">
        {chats.length == 0 ? (
          <div className="md:w-[70%] w-full text-center md:text-start mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
            <img src={assets.bot_big} className="w-[150px]" />
            <div className="md:w-[400px] w-full">
              <h1 className="text-[2rem]">Hi! I&apos;m BiteBot</h1>
              <p>
                Leverage my AI powers and discover culinary magic with me:
                Recipes, cooking inspirations and More at Your fingertips!
              </p>
            </div>
          </div>
        ) : (
          chats.map((chat) => (
            <div key={chat.id}>
              {chat.prompt ? (
                <div className="flex justify-end">
                  <div className="bg-gray-200 rounded-full max-w-[90%] md:max-w-[75%] text-right mr-1 px-2 py-1">
                    <p className="px-2">{chat.content}</p>
                  </div>
                  <AccountCircle sx={{ fontSize: "30px" }} />
                </div>
              ) : (
                <div className="flex justify-start">
                  <img
                    src={assets.bot_small}
                    alt="bot"
                    className="w-[30px] h-[30px]"
                  />
                  <div className="bg-white rounded-lg max-w-[90%] text-left ml-2 pt-[5px]">
                    <Markdown>{chat.content}</Markdown>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
        <div ref={chatEndRef} />
        {loading ? (
          <div className="flex justify-start">
            <img
              src={assets.bot_small}
              alt="bot"
              className="w-[30px] h-[30px]"
            />
            <div className="bg-white rounded-lg max-w-[95%] md:max-w-[90%] text-left ml-2 pt-[5px]">
              <SyncLoader size={8} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ChatBot;
