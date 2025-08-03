# Coinbase Wallet Viewer

## Overview
Coinbase Wallet Viewer is a React application that allows users to view their Coinbase exchange wallet information. The app features a pie chart to visualize wallet distribution and supports both light and dark themes.

## Features
- 📊 Display wallet information fetched from the Coinbase API [In progess...]
- 📈 Visualize wallet distribution using a pie chart [TO DO]
- 🔄 Real-time data updates [TO DO]
- 🔒 Secure API integration [TO DO]
- 🌓 Toggle between light and dark themes [Done ✅]


## Prerequisites
- Node.js 16.x or higher
- npm 7.x or higher
- Coinbase Exchange account
- Coinbase API credentials

## Coinbase API Setup

1. Create a Coinbase Developer Account:
   - Go to [Coinbase CDP Portal](https://portal.cdp.coinbase.com)
   - Sign in or create an account
   - Navigate to the Dashboard section

2. Generate API Credentials:
   - In the Dashboard, click on "API Keys"
   - Click "Generate new API key"
   - Set the following permissions:
     - ✅ view (read-only)
   - Add IP address restrictions (recommended)
   - Save your credentials securely:
     - API Key
     - API Secret

3. Configure Environment Variables:
   ```bash
   cp .env.example .env.dev
   ```
   Add your API credentials to `.env.dev`:
   ```plaintext
   BASE_API_URL=https://api.exchange.coinbase.com
   COINBASE_API_KEY=your_api_key
   COINBASE_API_SECRET=your_api_secret
   ```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/coinbase-wallet-viewer.git
   cd coinbase-wallet-viewer
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

## Development

Start the backend server:
```bash
cd backend
npm run dev
```

In a new terminal, start the frontend:
```bash
cd frontend
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

## Security Best Practices
- Only enable necessary read permissions
- Use IP whitelisting when possible
- Never commit `.env` files
- Regularly rotate your API keys
- Monitor your API usage in the CDP Portal

## License
This project is licensed under the MIT License.

## Acknowledgments

- Coinbase for their comprehensive API
- React community for excellent tools and libraries