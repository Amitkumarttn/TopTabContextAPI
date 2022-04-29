import React, {
    useEffect, useState, createContext,
  } from 'react';
  
  export const TabContext = createContext({});

  export const TabConsumer = ({ children }) => (
    <TabContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error('ConsumerTab must be used within a ContextProviderTab');
        }
        return children(context);
      }}
    </TabContext.Consumer>
  );

  export const TabProvider = ({ children, initialTabId = 0 }) => {
    const [selectedTabId, setSelectedId] = useState(initialTabId);
  
    useEffect(() => {
    }, [initialTabId, selectedTabId]);
  
    const toggleTabId = (tabId) => {
      setSelectedId(tabId);
    };
  
    const mProps = {
      toggleTabId,
      selectedTabId,
    };
  
    return <TabContext.Provider value={mProps}>{children}</TabContext.Provider>;
  };