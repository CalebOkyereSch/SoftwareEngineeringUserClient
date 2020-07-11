import React, { useState } from "react";

export const DataContext = React.createContext();

export default function MyContext(props) {
  const [cart, setCart] = useState([]);
  return (
    <DataContext.Provider value={{ cart, setCart }}>
      {props.children}
    </DataContext.Provider>
  );
}
