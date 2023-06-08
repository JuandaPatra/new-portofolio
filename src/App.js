import { useState } from "react";
import "./App.css";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import ParticlesBackground from "./components/ParticleBackground";
import Header from "./components/headers";
import Footer from "./components/footers";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Particles from "react-tsparticles";
import { LoadFull } from "tsparticles";
import { loadFull } from "tsparticles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Project from "./pages/project";

function App() {
  const [token, setToken] = useState();
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <div>
      {/* <GoogleReCaptchaProvider reCaptchaKey="6LdVT3kmAAAAAIUkv_i7RK346etEsr_F11ihNYbh">
        <GoogleReCaptcha
          onVerify={(token) => {
            setToken(token);
          }}
          
        />
      </GoogleReCaptchaProvider> */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: "rgb(10,10,25)",
            },
            fpsLimit: 60,
            particles: {
              shape: {
                type: "circle",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5,
                },
                value: 1.4,
              },
              color: {
                value: "#f1f1f1",
              },
              number: {
                density: {
                  enable: true,
                  area: 1080,
                },
                limit: 0,
                value: 800,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 1.6,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              interactivity: {
                detectsOn: "canvas",
                events: {
                  resize: true,
                },
              },
            },
          }}
        />

        <div className=" h-full w-full container-lg">
          <div className="absolute z-10 w-full h-full">
            <Header />
            <main className="min-h-[94%] py-8 2xl:w-4/5 m-auto">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </BrowserRouter>
              {/* <Home /> */}
            </main>
            <Footer />
          </div>
        </div>
    </div>
  );
}

export default App;
