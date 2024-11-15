import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";

function App() {
    return (
        <div className="bg-[#FDF9F3] min-h-screen font-sans">
            {/* Header */}
            <Header/>
            {/* Hero Section */}
            <Hero/>
        </div>
    )
}

export default App
