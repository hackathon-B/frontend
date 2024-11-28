import React, { useState, useEffect } from 'react';
// 共通
import { callApi } from '../common/api';
import { API_URLS } from '../common/constants';
// モックデータのインポート
import { mockMessages } from '../common/MockDatas';
// コンポーネント
import Header from '../components/Header'
import ChatWindow from '../components/chatComponents/ChatWindow'
import ChatWindowMaluti from '../components/chatComponents/ChatWindowMaluti'
import ChatList from '../components/ChatList'
import DictionaryList from '../components/DictionaryList'
import DictionaryEditor from '../components/DictionaryEditor'
// 分割
import Split from 'split.js';
import '../css/split.css';
// MUI
import { Drawer, Box, IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';


const ChatPage = () => {
  const [open, setOpen] = useState(false);
  const [showMultiWindow, setShowMultiWindow] = useState(false);
  const [currentChat, setCurrentChat] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    Split(['#chat-list', '#dictionary-list', '#dictionary-editor'],{
        sizes: [25, 25, 50 ], 
        minSize: 80,
        gutterSize: 10,
        direction: 'vertical'    // 上下分割
    });
  }, []);
  
  useEffect(() => {
    if (currentChat.id) {
      // API呼び出しをコメントアウト
      /*
      const endpoint = `${API_URLS.GET_CHAT_BY_ID(currentChat.id)}`;
      callApi('GET', endpoint, null)
        .then(response => {
          setMessages(response.messages);
        })
        .catch(error => {
          console.error(error);
          // 必要に応じてエラーハンドリング
        });
      */

      // モックデータを使用
      setMessages(mockMessages); // モックデータを設定
    }
  }, [currentChat.id]);

  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <div color="primary" className="w-full h-full flex flex-col relative">
      
      {/* Header */}
      <div color="primary" className="flex items-center justify-between">
        <Tooltip title="サイドバーを開く">
          <IconButton 
            color="inherit"
            onClick={handleDrawerToggle}
            size="medium"
            sx={{ width: '40px', height: '40px'}}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        
        <Header />
      </div>

      {/* Body */}
      <div color="primary"
        className="
          flex flex-row
          relative
          h-calc(100vh - 40px)
          overflow-hidden
      ">
        
        {/* Sidebar */}
        <Box color="secondary"
          sx={{
            width: open ? '300px' : '0px',
            transition: 'width 0.3s ease',
            overflow: 'hidden'
          }}
        >
          <Drawer
            color="secondary"
            variant="persistent"
            open={open}
            sx={{
              '& .MuiDrawer-paper': {
                height: 'calc(100vh - 40px)',
                width: '300px',
                position: 'relative',
                transition: 'width 0.3s ease',
              },
            }}
          >

            {/* Sidebar Content */}
            <div color="primary" className="split-column flex flex-col px-4 py-2 h-full
              bg-primary-light dark:bg-primary-dark
            ">
              <div id="chat-list">
                {/* チャットリスト */}
                <ChatList 
                  currentChat={currentChat}
                  setCurrentChat={setCurrentChat}
                />
              </div>
              <div id="dictionary-list">
                {/* 辞書リスト */}
                <DictionaryList />
              </div>
              <div id="dictionary-editor">
                <DictionaryEditor />
              </div>
            </div>
          
          </Drawer>
        </Box>

        {/* Main Content */}
        <Box 
          sx={{ 
            width: open ? 'calc(100% - 300px)' : '100%',
            transition: 'width 0.3s ease',
            position: 'relative'
          }}
        >
          {/* チャットウィンドウ */}
          {showMultiWindow ? (
            // "messages"をprops"messages"として渡している (マルチウィンドウ)
            <ChatWindowMaluti chatId={currentChat.id} messages={messages} />
          ) : (
            // "messages"をprops"messages"として渡している
            <ChatWindow chatId={currentChat.id} messages={messages} />
          )}
        </Box>
      </div>

      {/* チャットウィンドウを追加 */}  
      <Tooltip 
        title="チャットウィンドウを追加" 
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000
        }}
      >
        <IconButton 
          onClick={() => setShowMultiWindow(prevState => !prevState)}
          size="large"
          sx={{ 
            width: '56px', 
            height: '56px',
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            color: 'white',
            boxShadow: 3
          }}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ChatPage;