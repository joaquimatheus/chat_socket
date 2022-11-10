import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Nav, NavLinks, StyledApp } from './styles'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { getFromLocalStorage, setToLocalStorage } from './helpers/storage'

import { useTheme } from './themes/useTheme'
import { GlobalStyles } from './themes/globalStyles'
import { defaultThemes, ITheme } from './themes/themes'

import Login from "./pages/Login"
import Chat from './pages/Chat';

import ThemePicker from './components/ThemePicker'

function App() {
    const loggedIn = getFromLocalStorage("login-state")
    const navigate = useNavigate()

    const localThemes: { [key: string]: ITheme } =
        getFromLocalStorage("all-themes")
    if (!localThemes) {
        setToLocalStorage("all-themes", defaultThemes)
    }

    const { theme, themeLoaded } = useTheme()
    const [selectedTheme, setSelectedTheme] = useState(theme)

    useEffect(() => {
        setSelectedTheme(theme)
    }, [theme, themeLoaded]) 

    const logoutHandler = (e: SyntheticEvent) => {
        setToLocalStorage("login-state", false)
        navigate("/", { replace: true })
    }

    return (
        <>
            {themeLoaded && (
                <ThemeProvider theme={selectedTheme} >
                    <GlobalStyles />
                    <StyledApp>
                        <header>
                            <Nav>
                                {loggedIn && ( 
                                    <NavLinks onClick={logoutHandler}>Logout</NavLinks>
                                )}
                                <ThemePicker themeSetter={setSelectedTheme}/>
                            </Nav>
                        </header>
                            <Routes>
                                <Route 
                                    path="/"
                                    element={
                                        loggedIn ? <Navigate to="/chat" /> : <Navigate to="/login" />
                                    }
                                />
                                <Route path="/login" element={<Login />} />
                                <Route path="/chat" element={<Chat />} />
                            </Routes>
                    </StyledApp>
                </ThemeProvider>
            )}
        </>
    );
}

export default App;
