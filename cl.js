fetch("https://dev--code-challenge-receipt.thompson-plyler.autocode.gg/", {
    method: "post",
    headers: {
      "Content-Type": 'application/json',
      "Accepts": 'application/json'
      },
    body: JSON.stringify({title:"Test for Assignment", subject: "Christian Lirette Assignment Received"})})