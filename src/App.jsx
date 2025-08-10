import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import ContactPage from './pages/ContactPage'
import Careers from './pages/Careers'
import ServicesPage from './pages/ServicesPage'
import ToolsPage from './pages/ToolsPage'
import TokenizerPage from './pages/TokenizerPage'
import TextEmbedding from './pages/TextEmbedding';
import Chunking from './pages/Chunking';
import GroqChatbot from './pages/GroqChatbot';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="careers" element={<Careers />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="tools/tokenizer" element={<TokenizerPage />} />
          <Route path="tools/text-embedding" element={<TextEmbedding />} />
          <Route path="tools/chunking" element={<Chunking />} />
          <Route path="tools/groq-chatbot" element={<GroqChatbot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
