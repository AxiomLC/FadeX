const { OrderlyClient } = require('@orderly.network/orderly-sdk');

// Example setup (replace with actual credentials and logic)
const client = new OrderlyClient({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  network: 'solana' // or other supported network
});

console.log('Orderly Client initialized');
