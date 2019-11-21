const API_URL = 'https://api.coincap.io/v2'

async function getAssets() {
  let RESPONSE = await fetch(`${API_URL}/assets?limit=20`)
  RESPONSE = await RESPONSE.json()
  return RESPONSE.data
}

export default {
  getAssets
}
