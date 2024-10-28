import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import MonacoEditor from "@monaco-editor/react";

// Adjust this to your Socket.IO server URL
const SOCKET_SERVER_URL = "http://localhost:5000";

const Collab = () => {
  const [code, setCode] = useState("// Start coding collaboratively!\n");
  const [socket, setSocket] = useState(null);
  const editorRef = useRef(null);

  // Initialize the Socket.IO client
  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    newSocket.on("code_update", (newCode) => {
      setCode(newCode);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  // Handle code change in the editor
  const handleCodeChange = (newCode) => {
    setCode(newCode);
    if (socket) {
      socket.emit("code_change", newCode);
    }
  };

  // Attach the editor instance to ref for further usage
  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <div style={{ height: "100vh", paddingTop: "60px"  }}>
      <MonacoEditor
        height="100vh"
        defaultLanguage="javascript"
        value={code}
        onChange={handleCodeChange}
        onMount={handleEditorDidMount}
        theme="vs-dark"
      />
    </div>
  );
};

export default Collab;
