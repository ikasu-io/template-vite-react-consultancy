import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Index from './pages/Index'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      {/* Add new pages above the catch-all "*" route. */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
