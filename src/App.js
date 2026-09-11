import "./style.css";

import MenuBar from './components/navbar';
import Search from './components/search';
import Product from './components/product';
import Aboutus from './components/about';
import Footer from './components/footer';

function App() {
    return (
        <>
            <MenuBar />
            <Search />
            <Product />
            <Aboutus />
            <Footer />
        </>
    );
}

export default App;