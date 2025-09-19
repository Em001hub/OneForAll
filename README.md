# DisasterUnified 🌪️

A comprehensive disaster management platform unifying multiple disaster response systems into a single, powerful application.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Python 3.8+
- Git

### Environment Setup

1. **Copy environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your API keys in `.env.local`:**
   - Supabase credentials
   - OpenAI API key
   - Weather API key
   - Twitter API credentials
   - Government API keys

3. **Install dependencies:**
   ```bash
   # Frontend (React)
   cd UserC
   npm install
   cd ..
   
   # Backend (Python)
   pip install -r requirements.txt
   ```

### 🔧 Environment Files Structure

- **`.env`** - Template file with placeholder values (safe to commit)
- **`.env.example`** - Simplified template for new developers 
- **`.env.local`** - Your actual API keys (NEVER commit this!)
- **`configs/api_keys.env`** - Legacy config file (protected by .gitignore)

## 📁 Project Structure

```
DisasterUnified/
├── UserC/                   # 🏠 Main React frontend + Supabase
├── DisasterSencePages/      # 📄 Legacy HTML pages (to convert)
├── VoiceSupport/           # 🎤 Speech-to-text assistance
├── LivePage/               # 📡 Real-time data (NDMA, IMD, Twitter)
├── PredictionPage/         # 🤖 AI disaster predictions
├── configs/                # 🔐 Protected API keys
└── .env files             # ⚙️ Environment configuration
```

## 🌟 Features

### 🏠 **UserC (Base Platform)**
- React frontend with modern UI
- Supabase authentication & database
- Multi-role dashboards (Public, Government, NGO, First Responders)
- Real-time notifications

### 📡 **LivePage (Real-time Data)**
- NDMA disaster alerts
- IMD weather data
- Twitter social media monitoring
- Live disaster mapping

### 🤖 **PredictionPage (AI Analytics)**
- OpenAI-powered disaster predictions
- Weather pattern analysis
- Risk assessment algorithms
- Interactive prediction maps

### 🎤 **VoiceSupport**
- Speech-to-text emergency reporting using **OpenAI Whisper**
- NO separate SPEECH_API_KEY needed - uses OpenAI API
- Multilingual support (English, Hindi, auto-detect)
- Floating voice assistant for hands-free emergency reporting

### 📄 **DisasterSencePages**
- Emergency preparedness guides
- SOS functionality
- Disaster kit recommendations
- Community reporting

## 🔑 API Keys Required

### Essential APIs:
- **Supabase**: Database & Authentication (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)
- **OpenAI**: AI predictions & Whisper speech-to-text (`VITE_OPENAI_API_KEY`)
  - **Note**: NO separate SPEECH_API_KEY needed - Whisper is included in OpenAI API
- **Weather API**: Real-time weather data (`VITE_WEATHER_API_KEY`)

### Optional APIs:
- **Twitter**: Social media monitoring
- **Government APIs**: Official disaster alerts

## 🚀 Running the Application

### Development Mode:

1. **Main React App (UserC):**
   ```bash
   cd UserC
   npm run dev
   # Runs on http://localhost:3000
   ```

2. **Live Data Dashboard:**
   ```bash
   cd LivePage
   npm run dev
   # Runs on http://localhost:3002
   ```

3. **Prediction Dashboard:**
   ```bash
   cd PredictionPage
   npm run dev
   # Runs on http://localhost:3003
   ```

4. **Voice Support:**
   ```bash
   cd VoiceSupport
   npm run dev
   # Runs on http://localhost:3004
   ```

5. **Legacy Flask Backend (DisasterSencePages):**
   ```bash
   cd DisasterSencePages
   python app.py
   # Runs on http://localhost:5000
   ```

## 🔐 Security Notes

- **NEVER commit `.env.local`** - Contains real API keys
- **NEVER commit `configs/api_keys.env`** - Protected by .gitignore
- Use **environment variables** in production
- Rotate API keys regularly

## 🛠️ Development Workflow

1. **Fork & Clone** the repository
2. **Copy `.env.example`** to `.env.local` and fill in your keys
3. **Install dependencies** for each component
4. **Run in development mode** (see commands above)
5. **Test integration** between components
6. **Create pull requests** for changes

## 🌍 Production Deployment

### Environment Variables for Production:
Set these in your hosting platform (Vercel, Netlify, etc.):

```env
VITE_SUPABASE_URL=your_production_supabase_url
VITE_SUPABASE_ANON_KEY=your_production_supabase_key
VITE_OPENAI_API_KEY=your_openai_api_key
# ... other production variables
```

## 🤝 Contributing

1. Check existing issues or create new ones
2. Fork the repository
3. Create feature branches
4. Write tests for new features
5. Submit pull requests

## 📖 Documentation

- **API Documentation**: Available in each component's README
- **Database Schema**: Check `UserC/` SQL files
- **Component Integration**: See individual folder READMEs

## 🆘 Support & Issues

- **Bug Reports**: Use GitHub Issues
- **Feature Requests**: Use GitHub Discussions
- **Security Issues**: Email privately to maintainers

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- **Supabase** for database & auth
- **OpenAI** for AI capabilities
- **Government APIs** for disaster data
- **Open source community** for tools & libraries

---

**🚨 Emergency Contact Integration Coming Soon!**

Built with ❤️ for disaster preparedness and community safety.