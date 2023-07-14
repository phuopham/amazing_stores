const AppContext = React.createContext<{
  user?: any;
  setUser?: any;
  cart?: any;
  setCart?: any;
}>({});

import React, { useState } from "react";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [cart, setCart] = useState<any>(null);
  const [ready, setReady] = useState<boolean>(true);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
