import { createClient } from "urql"

const query = `
query get($type: String!) {
  getAll(type: $type) {

    ... on Brand {
      pid
      type
      title
    }

    ... on Series {
      pid
      type
      title
    }

    ... on Episode {
      pid
      type
      title
    }
  }
}
`

const getAll = async (args, setJson) => {
  const client = createClient({
    url: 'http://localhost:3001/graphql'
  })
  client.query(query, args).toPromise()
    .then(data => setJson(data.data))
    .catch(e => console.error(e))
}

export default getAll
