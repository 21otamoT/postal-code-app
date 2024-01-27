const getData = () => {
  const input = document.getElementById("input").value;
  console.log(input);

  const param = {
    zipcode: input
  };
  
  const queryParam = new URLSearchParams(param);
  console.log(param);
  console.log(queryParam.toString());
  
  fetch('https://zipcloud.ibsnet.co.jp/api/search?' + queryParam.toString())
    .then(res => res.json())
    .then(data => {
      console.log(data);

      const result = data.results[0];
      const address1 = `${result.address1}`;
      const address2 = `${result.address2}`;
      const address3 = `${result.address3}`;
      const kana1 = `${result.kana1}`;
      const kana2 = `${result.kana2}`;
      const kana3 = `${result.kana3}`;

      document.getElementById('address').innerHTML = address1+address2+address3;
      document.getElementById('kana').innerHTML = kana1+kana2+kana3;
      document.getElementById('status').innerHTML = data.status;
      document.getElementById('message').innerHTML = `あなたの住所は${address1}です`
    });
};