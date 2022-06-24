import { createClient } from "urql"

const query = `
query getSomeEpisodes($amount: Int!) {
  getNumberOfEpisodes(amount: $amount) {
    pid
    master_brand_id
    member_of {
      pid
    }
  }
}
`

const getNumberOfEpisodes = async (args, setJson) => {
  const client = createClient({
    url: 'http://localhost:3001/graphql'
  })
  client.query(query, args).toPromise()
    .then(data => setJson(data.data))
    .catch(e => console.error(e))
}

export default getNumberOfEpisodes