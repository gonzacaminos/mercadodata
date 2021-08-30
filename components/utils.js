// Helper functions for products

export function updateQuery(router, str){
    router.push({
      query: { q: encodeURI(str) },
  });
  }

export function extractID(srt){
    let rule = /M\w+-?\d+/g
    return srt.match(rule) ? srt.match(rule)[0].replace('-', '') : false
}

export function formatMoney(price,currency='$') {
    let currency_format = Intl.NumberFormat('es-AR');
    return `${currency} ${currency_format.format(price)}`
}