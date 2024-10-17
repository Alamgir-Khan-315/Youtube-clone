import Home from './component/Home'
import Video from './component/Video'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (

    <div className="h-full">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}