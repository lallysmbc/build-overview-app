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
        `http://localhost:57492//Home/GetBuildOverview`
      ).catch(function() {
        hasError = true;
      });
  
      if(hasError){
        return {error: true};
      }
      const text = await readBodyAndDecode(response);
  
      return JSON.parse(text);
  }
  