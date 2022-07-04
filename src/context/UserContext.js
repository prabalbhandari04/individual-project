import React, { useState } from 'react';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    // SideNav Active Tabs
    const [activeTab, setActiveTab] = useState(1);
    // Token
    const [user, setUser] = useState('patient');
    // Edit Page Side Nav
    const [activeEdit, setActiveEdit] = useState(1);
    // Doctor Side Nav
    const [activeDoctor, setActiveDoctor] = useState(1);
    const [activeDoctorTab, setActiveDoctorTab] = useState('');

    return (
        <UserContext.Provider value={{ activeTab, setActiveTab, user, setUser, activeEdit, setActiveEdit, activeDoctor, setActiveDoctor, activeDoctorTab, setActiveDoctorTab }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider