import { getSession } from "next-auth/client";

const getDocumentsSent = async () => {
  const res = await fetch(`${process.env.NEXTAUTHDJANGO_URL}/api/conofi/`, {
    method: 'GET',
  })
  const data = await res.json()
  // const session = await getSession({ req: request })
  // console.log('response', response)
  // if (session === null) {
  //   response.status(401).end()
  //   return
  // }
  // const res = await fetch(`${process.env.NEXTAUTHDJANGO_URL}/api/conofi/`, {
  //   method: 'GET',
  // })
  // const data = await res.json()
  // response.status(200).json(data)
  return data
}

export default getDocumentsSent