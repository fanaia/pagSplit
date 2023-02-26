import React, {createContext, useState} from 'react';

export const AutenticacaoContext = createContext();

export const AutenticacaoProvider = ({children}) => {
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

    return (
        <AutenticacaoContext.Provider
            value={{usuarioAutenticado, setUsuarioAutenticado}}>
            {children}
        </AutenticacaoContext.Provider>
    );
};
