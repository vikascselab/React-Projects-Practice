import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Createpost from "./Components/Createpost.jsx";
import PostList from "./Components/PostList.jsx";

import "./App.css";
import { useState } from "react";
import PostListProvider from "./store/post-list-store.jsx";

function App() {
  const [slectedTap, SetSelectedTap] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="App-container">
          <Sidebar
            slectedTap={slectedTap}
            SetSelectedTap={SetSelectedTap}
          ></Sidebar>
          <div className="content">
            <Header> </Header>

            {slectedTap == "Home" ? (
              <PostList></PostList>
            ) : (
              <Createpost></Createpost>
            )}

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
