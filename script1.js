function calculateEMA(data, span) {
    let ema = [];
    let multiplier = 2 / (span + 1);
    let emaVal = data.slice(0, span).reduce((a, b) => a + b) / span;
    ema.push(emaVal);
  
    for (let i = span; i < data.length; i++) {
      emaVal = (data[i] - emaVal) * multiplier + emaVal;
      ema.push(emaVal);
    }
  
    return ema;
  }
  
  function generateSignals(emaShort, emaLong) {
    if (emaShort.slice(-1)[0] > emaLong.slice(-1)[0] && emaShort.slice(-2)[0] <= emaLong.slice(-2)[0]) {
      return 'BUY';
    } else if (emaShort.slice(-1)[0] < emaLong.slice(-1)[0] && emaShort.slice(-2)[0] >= emaLong.slice(-2)[0]) {
      return 'SELL';
    } else {
      return 'HOLD';
    }
  }
  
  function executeTrade(symbol, quantity, transactionType) {
    // Implement trade execution logic here
    console.log(`Executing ${transactionType} order for ${quantity} ${symbol}`);
  }
  
  function startTrading() {
    const symbol = document.getElementById('symbol').value;
    const quantity = parseInt(document.getElementById('quantity').value);
  
    // Mock historical price data (replace with actual data retrieval)
    const historicalData = [100, 110, 120, 130, 125, 135, 140, 145, 150, 160, 155, 165, 170, 175, 180];
  
    const shortEMA = calculateEMA(historicalData, 5); // Example: Short-term EMA with span of 5
    const longEMA = calculateEMA(historicalData, 10); // Example: Long-term EMA with span of 10
  
    const signal = generateSignals(shortEMA, longEMA);
  
    document.getElementById('signal').innerText = `Signal: ${signal}`;
  
    // Execute trade based on signal
    if (signal === 'BUY') {
      executeTrade(symbol, quantity, 'BUY');
    } else if (signal === 'SELL') {
      executeTrade(symbol, quantity, 'SELL');
    }
  }
  