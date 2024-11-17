import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Shop from "./components/Shop/Shop.tsx";
import About from "./components/About/About.tsx";
import Comment from "./components/Comment/Comment.tsx";

function App() {
    return (
        <div className="bg-[#FDF9F3] min-h-screen font-sans">
            <Header />
            <Hero />
            <div id="shop">
                <Shop />
            </div>
            <About />
            <Comment />
        </div>
    );
}

export default App;