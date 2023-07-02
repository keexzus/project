import React, { useState, useContext } from 'react'
import sublinks from './data8';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });
    
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
      };
      const closeSubmenu = (e) => {
        //check if curoser is still within the submenu area
    if(!e.target.classList.contains('submenu')) {
        // setLocation({}); 
        // reset the location to close the submenu
        setIsSubmenuOpen(false);
        }
      };

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                setIsSidebarOpen,
                openSidebar,
                closeSidebar,
                isSubmenuOpen,
                openSubmenu,
                closeSubmenu,
                page,
                setPage,
                location,
                setLocation,
            }}
            >
                {children}
            </AppContext.Provider>
    );
};

    export const useGlobalContext = () => {
        return useContext(AppContext);
    };

    export { AppContext, AppProvider };