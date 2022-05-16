import React from "react";
import { Card } from "./Card";
import Header from "./Header";
import { data } from "../data";

function App() {
  return (
    <div className="mx-2">
      <Header />
      <main className="my-20 mx-10">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}

export default App;

