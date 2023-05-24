import React from 'react';
import Sidebar from "../components/Sidebar.jsx";
import Overlay from "../components/Overlay.jsx";
import Container from "../components/Container.jsx";
import SearchModal from "../components/SearchModal.jsx";

const MainPage = () => {
    return (
        <main>
            <Sidebar />
            <Overlay />
            <Container />
            <SearchModal />
        </main>
    );
};

export default MainPage;