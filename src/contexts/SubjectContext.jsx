import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SubjectContext = createContext();

export function SubjectProvider({ children }) {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <SubjectContext.Provider value={{ selectedSubject, setSelectedSubject }}>
      {children}
    </SubjectContext.Provider>
  );
}
