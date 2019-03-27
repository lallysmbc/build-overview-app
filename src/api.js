import build_data_json from '../TestData/fetchBuildData.json'

const responseAsDOM = async response => {
	const text = await response.text()
	const parser = new DOMParser()
	return parser.parseFromString(text, 'text/html')
}

const readBodyAndDecode = async response => {
	const buffer = await response.arrayBuffer()
	const decoder = new TextDecoder('iso-8859-1')

	return decoder.decode(buffer)
}

export const fetchBuildData = async () => {
    if(process.env.STUBAPI){
      console.log(build_data_json)
      return build_data_json   
    } else {
      const response = await fetch(`http://localhost:57492/Home/GetBuildOverview`)

      if (response.ok) {
        const text = await readBodyAndDecode(response)

        return JSON.parse(text)
      }

      return {
        error: true
      }
  }
}

export const fetchTopFive = async count => {
    if(process.env.STUBAPI){
      return JSON.parse('')   
    } else {
      const url = `http://localhost:57492/Home/TopFive?` + count
      const response = await fetch(url)

      if (response.ok) {
        const text = await readBodyAndDecode(response)

        return JSON.parse(text)
      }

      return {
        error: true
      }
  }
}

export const fetchJestTestData = async count => {
  if(process.env.STUBAPI){
    return JSON.parse('')   
  } else {
    const url = `http://localhost:57492/Home/AllJestData?` + count

    const response = await fetch(url)

    if (response.ok) {
      //TODO: This could well be incorrect and need reverting
      return response.json()
    }

    return {
      error: true
    }
  }
}