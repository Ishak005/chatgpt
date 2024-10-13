import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
        <div className="upperSideTop"><img src={gptLogo} alt="logo" /><span className="brand">ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="addImg" className="addBtn"/>New Chat</button>
        <div className="upperSideButtom">
          <button className="query"><img src={msgIcon} alt="Query" />What is programming ?</button>
          <button className="query"><img src={msgIcon} alt="Query" />How to use an API ?</button>
        </div>
        </div>
        <div className="lowerSide">
          <div className="listItem"><img  src={home} alt="" className="listItemImg"/>Home</div>
          <div className="listItem"><img  src={saved} alt="" className="listItemImg"/>Saved</div>
          <div className="listItem"><img  src={rocket} alt="" className="listItemImg"/>Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">

      </div>
    </div>
  );
}

export default App;
