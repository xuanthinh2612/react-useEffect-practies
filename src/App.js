import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Content from './Content'
import AvatarTab from './AvatarTab';
import FakeChatApp from './FakeChatApp';


// 1. useEffect(callback)
// - Gọi call back mỗi khi component re-render
// 
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 
// 3. useEffect(callback, deps)
// - callback sẽ được gọi mỗi khi deps thay đổi
// 
// ------------------------------ Tính chất chung----------------------
// 
// - Callback luôn được gọi sau khi component mouted
// - Cleanup function luôn được gọi trước khi component unmouted
// - Cleanup function luôn được gọi trước khi thằng call back được gọi ((trừ lần mounted)sẽ clean kết quả của call back trước đấy)
// 



// Create customs event

function emitMessenger(id) {
  setInterval(()=> {
    window.dispatchEvent(
      new CustomEvent(`chatroom-${id}`, {detail: `room: ${id}- hello how are you?`})
    )
  },2000)
}

emitMessenger(1)
emitMessenger(2)
emitMessenger(3)
emitMessenger(4)
emitMessenger(5)


function App() {
  const [show, setShow] = useState(false)
  const [avatarTab, setAvatarTab] = useState(false)
  const [chatApp, setChatApp] = useState(false)

  return (
    <div className="App" style={{padding: 100}}>
      <button
        className="btn btn-secondary m-2"
        onClick={() => setShow(!show)}
      >Call API</button>
      <button
        className="btn btn-secondary m-2"
        onClick={() => setAvatarTab(!avatarTab)}
      >Avatar upload</button>
      <button
        className="btn btn-secondary m-2"
        onClick={() => setChatApp(!chatApp)}
      >Fake Chat App</button>
      <br/>
      {show && <Content/>}
      {avatarTab && <AvatarTab/>}
      {chatApp && <FakeChatApp/>}
    </div>
  );
}

export default App;
