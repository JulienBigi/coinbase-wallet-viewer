# Coinbase Wallet Viewer

## Overview

Coinbase Wallet Viewer is a React application that allows users to view their Coinbase exchange wallet information. The app features a pie chart to visualize wallet distribution and supports both light and dark themes.

## Features

- 📊 Display wallet information fetched from the Coinbase API [TO DO]
- 🔄 Real-time data updates [TO DO]
- 🔒 Secure API integration [TO DO]
- 🌓 Toggle between light and dark themes [Done ✅]
- 📈 Visualize wallet distribution using a pie chart (TEMPORALLY fetch by a .json file) [Done ✅]

## Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher
- Coinbase Exchange account
- Coinbase API credentials

## Coinbase API Setup

```bash
Issue with the Coinbase API credentials (API KEYS)

[TODO]
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/coinbase-wallet-viewer.git
   cd coinbase-wallet-viewer
   ```

2. Install dependencies:

   ```bash
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

## Development

Start the frontend:

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
