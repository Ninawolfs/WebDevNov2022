import React from "react";
import Header from "./components/Header/Header";
import Todo from "./components/Header/Todo";
import Breakfast from "./components/Header/Breakfast";
import Lunch from "./components/Header/Lunch";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import NotFound from "./components/404";

function App() {
  return (
    <BrowserRouter>
      <section id="menu-list" class="section-padding">
        <div class="container">
          <div class="row">
            <Header />
            <div id="menu-wrapper">
              <Routes>
                <Route path="/todo" element={<Todo />} />
                <Route path="/breakfast" element={<Breakfast />} />
                <Route path="/lunch" element={<Lunch />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
