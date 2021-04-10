
const getService = async (request, res) => {
  const url = "https://age-of-empires-2-api.herokuapp.com/api/v1"
  const { query: { id } } = request
  const response = await fetch(`${url}/civilization/${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
  let data = await response.json()
  res.status(200).json(data)
}
export default getService