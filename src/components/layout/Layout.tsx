import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
