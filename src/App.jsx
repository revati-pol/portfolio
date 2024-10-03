import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Story from './components/story/Story';

function App(props) {
    return (
        <div>
            <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Story/>
            <Contact/>
            <Footer/>    
            </>
        </div>
    );
}

export default App;