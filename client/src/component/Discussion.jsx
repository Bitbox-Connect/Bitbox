import React, { useEffect, useState, useRef } from 'react';
import { MessageCircle, Users, Send, Smile, Image, Paperclip, Moon, Sun, ChevronDown } from 'lucide-react';
// CHAT-PATTERN-IMAGE
import chatPatternLight from "../assets/images/Discussion/chat-pattern.png";
import chatPatternDark from "../assets/images/Discussion/chat-pattern-dark.png";

const Discussion = ({ mode }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [userName, setUserName] = useState('');
  const [showModal, setShowModal] = useState(true);
  const [onlineUsers, setOnlineUsers] = useState([
    { id: 1, name: 'Alice', status: 'active' },
    { id: 2, name: 'Bob', status: 'idle' },
    { id: 3, name: 'Charlie', status: 'active' }
  ]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const messagesEndRef = useRef(null);

  const emojis = ['😊', '😂', '❤️', '👍', '🎉', '🔥', '✨', '🌟'];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = messageInput.trim();
    if (message) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        content: message,
        position: 'right',
        sender: 'You',
        timestamp: new Date(),
        status: 'sent'
      }]);
      setMessageInput('');
    }
  };

  const handleEmojiClick = (emoji) => {
    setMessageInput(prev => prev + emoji);
    setShowEmoji(false);
  };

  const handleJoin = (e) => {
    e.preventDefault();
    const name = e.target.username.value.trim();
    if (name) {
      setUserName(name);
      setShowModal(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center p-4 transition-colors duration-300`}>
      {/* Main Chat Container */}
      <div className={`w-full max-w-5xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-2xl overflow-hidden transition-colors duration-300`}>
        {/* Chat Header */}
        <div className={`${isDarkMode ? 'bg-indigo-900' : 'bg-indigo-600'} p-4 transition-colors duration-300`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <MessageCircle className="text-white" size={24} />
              <div>
                <h2 className="text-xl font-bold text-white">Bitbox Community</h2>
                <p className="text-indigo-200 text-sm">Where ideas come alive</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowUserList(!showUserList)}
                className="flex items-center space-x-2 bg-indigo-500 hover:bg-indigo-400 px-3 py-1 rounded-full text-white text-sm transition-colors"
              >
                <Users size={16} />
                <span>{onlineUsers.length} online</span>
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-indigo-500 transition-colors"
              >
                {isDarkMode ? <Sun className="text-white" size={20} /> : <Moon className="text-white" size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex h-[600px]">
          {/* Users Sidebar - Slides in/out */}
          <div className={`w-64 border-r ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} 
            transform transition-transform duration-300 ${showUserList ? 'translate-x-0' : '-translate-x-full'} absolute lg:relative lg:translate-x-0`}>
            <div className="p-4">
              <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Online Users</h3>
              <div className="space-y-2">
                {onlineUsers.map(user => (
                  <div key={user.id} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{user.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 flex flex-col">


<div
  className="flex-1 overflow-y-auto p-4 space-y-4"
  style={{
    backgroundImage: `url(${isDarkMode ? chatPatternDark : chatPatternLight})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {messages.map((message) => (
    <div
      key={message.id}
      className={`flex ${message.position === 'right' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[70%] rounded-2xl p-4 ${
          message.position === 'right'
            ? `${isDarkMode ? 'bg-indigo-900' : 'bg-indigo-600'} text-white`
            : `${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} ${isDarkMode ? 'text-white' : 'text-gray-800'}`
        } transform hover:scale-[1.02] transition-transform duration-200`}
      >
        <div className="flex items-center space-x-2 mb-1">
          <span className="font-medium text-sm">{message.sender}</span>
          <span className="text-xs opacity-75">
            {new Date(message.timestamp).toLocaleTimeString()}
          </span>
        </div>
        <p className="text-sm leading-relaxed">{message.content}</p>
        {message.position === 'right' && (
          <div className="text-right mt-1">
            <span className="text-xs opacity-75">✓✓</span>
          </div>
        )}
      </div>
    </div>
  ))}
</div>


            {/* Message Input */}
            <div className={`p-4 border-t ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <form onSubmit={handleSubmit} className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message..."
                    className={`w-full px-4 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 
                      ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-800 border-gray-300'} 
                      border transition-colors`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowEmoji(!showEmoji)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <Smile className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-indigo-500 transition-colors`} size={20} />
                  </button>
                </div>
                <button
                  type="button"
                  className={`p-3 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
                >
                  <Paperclip className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-indigo-500 transition-colors`} size={20} />
                </button>
                <button
                  type="submit"
                  className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
              
              {/* Emoji Picker */}
              {showEmoji && (
                <div className={`absolute bottom-20 right-4 p-3 grid grid-cols-4 gap-2 rounded-lg shadow-lg 
                  ${isDarkMode ? 'bg-gray-700' : 'bg-white'} border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  {emojis.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => handleEmojiClick(emoji)}
                      className="text-2xl hover:scale-125 transition-transform"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Join Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-full max-w-md transform transition-all duration-300 scale-100`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Join the Discussion
            </h3>
            <form onSubmit={handleJoin} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Choose a username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 
                    ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-800 border-gray-300'} 
                    border transition-colors`}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                  transition-colors transform hover:scale-[1.02] duration-200"
              >
                Join Discussion
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discussion;