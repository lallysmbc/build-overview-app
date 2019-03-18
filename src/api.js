async function responseAsDOM(response) {
    const text = await response.text();
    const parser = new DOMParser();
    return parser.parseFromString(text, "text/html");
  }
  
  async function readBodyAndDecode(response) {
    const buffer = await response.arrayBuffer();
  
    const decoder = new TextDecoder("iso-8859-1");
    return decoder.decode(buffer);
  }
  
  export async function fetchBuildData() {
      var hasError = false;
      const response = await fetch(
        `http://localhost:57492/Home/GetBuildOverview`
      ).catch(function() {
        hasError = true;
      });
  
      if(hasError){
        return {error: true};
      }
      const text = await readBodyAndDecode(response);
  
      return JSON.parse(text);
  }
  
  export async function fetchTopFive(count) {
    var hasError = false;
    let url = `http://localhost:57492/Home/TopFive?`+count
    console.log(url)
    const response = await fetch(
      url
    ).catch(function() {
      hasError = true;
    });

    if(hasError){
      return {error: true};
    }
    const text = await readBodyAndDecode(response);

    return JSON.parse(text);
}

export async function fetchJestTestData(count) {
  var hasError = false;
  let url = `http://localhost:57492/Home/AllJestData?`+count
  console.log(url)
  const response = await fetch(
    url
  ).catch(function() {
    hasError = true;
  });

  if(hasError){
    return {error: true};
  }
  const text = await readBodyAndDecode(response);

  return JSON.parse(text);
}