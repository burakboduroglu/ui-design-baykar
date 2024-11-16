import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Shop from "./components/Shop/Shop.tsx";

function App() {
    return (
        <div className="bg-[#FDF9F3] min-h-screen font-sans">
            <Header />
            <div id="hero">
                <Hero />
            </div>
            <div id="shop">
                <Shop />
            </div>
            <div id="solutions">
                {/* Solutions Section */}
            </div>
            <div id="pricing">
                {/* Pricing Section */}
            </div>
            <div id="resources">
                {/* Resources Section */}
            </div>
            <div id="login">
                {/* Login Section */}
            </div>
            <div id="signup">
                {/* Signup Section */}
            </div>
        </div>
    );
}

export default App;