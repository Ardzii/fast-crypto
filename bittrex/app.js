var apiRequest = require('./apiRequest.js').apiRequest;


  // ====== GET TICKER DATA:
function bittrex(list) {
  return Promise.all(list.map(single))
  .then((res) => {
    return res;
  }).catch((err) => {
    console.log(err);
  });
};

  // ===== GET SINGLE TICKER AND ADAPT TO LAYOUT HANDLER:

function single(item) {
  return apiRequest({market: item}).then((res) => {
      var result = {};
      var timeStamp = Math.floor(new Date());
        result= {
              mk: 'bittrex',
              name: res.body.result[0].MarketName,
              a: res.body.result[0].Ask,
              b: res.body.result[0].Bid,
              c: res.body.result[0].Last,
              v: res.body.result[0].Volume,
              p: res.body.result[0].BaseVolume,
              l: res.body.result[0].Low,
              h: res.body.result[0].High,
              o: res.body.result[0].PrevDay,
              sn: res.body.result[0].Created,
              n: timeStamp,
              OpenBuyOrders: res.body.result[0].OpenBuyOrders,
              OpenSellOrders: res.body.result[0].OpenSellOrders,
        }
      return result;
  }).catch((err) => {
    console.log(err);
  });
};

// bittrex(['USDT-BTC']);

module.exports = {
  bittrex
}
