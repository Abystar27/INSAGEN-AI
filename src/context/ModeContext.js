import { createContext, useContext } from 'react';

const ModeContext = createContext();

export const useMode = () => useContext(ModeContext);

export default ModeContext;
