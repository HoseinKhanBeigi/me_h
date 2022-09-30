import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home"
import { About } from "./components/about"
import { useResizeWindowRef } from "./hooks/useResize"
import "./app.scss"
import { useEffect } from "react";
import { SpineLine } from "./components/spineLine";

export default function App() {
  const windowSizeref = useResizeWindowRef();
  useEffect(() => {
    if (windowSizeref.isDesktop) {
      console.log(windowSizeref.isDesktop);
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <SpineLine isPlaying={true} />
      <div className="tweenerElement"></div>
    </>
  );
}
