const arweave = require('arweave').init({
  host: 'arweave.net',
  protocol: 'https',
})

const axios = require('axios')

const fromArweave = ids => Promise.all(
    ids.map(id =>
      arweave.transactions.getData(ids, { decode: true, string: true }),
    )
  )

let instance = axios.create({ baseURL: 'http://forgotten.works/data/' })
const fromDO = paths => Promise.all(
  paths.map(path => instance.get(path))
)
instance = axios.create({ baseURL: 'http://handlebauer.asia.feralhosting.com/data/' })
const fromFeral = paths => Promise.all(
  paths.map(path => instance.get(path))
)

const main = async () => {
  const action = 'Fetch'
  const from = { arweave: 'Arweave', do: 'Digital Ocean', feral: 'Feral Hosting' }
  
  // ~5.96 MB when Base64Url encoded
  let description = '250k movie titles'
  let transactionIds = ['y4yAF5LLpVlLDjkp22as2hFc98NFZH5bqzm-KmSDkFE'] 
  console.time(`${action}: ${description} - ${from.arweave}`)
  let data = await fromArweave(transactionIds)
  console.timeEnd(`${action}: ${description} - ${from.arweave}`)

  let paths = ['250k-movie-titles']
  console.time(`${action}: ${description} - ${from.do}`)
  data = await fromDO(paths)
  console.timeEnd(`${action}: ${description} - ${from.do}`)

  console.time(`${action}: ${description} - ${from.feral}`)
  data = await fromFeral(paths)
  console.timeEnd(`${action}: ${description} - ${from.feral}`)

  console.log()

  description = '5x 50k movie titles'
  transactionIds = [
    'jhEh4gSjppCxXTKPar6dUinyXuT12jsmq_rPbVTmI5k',
    'arWGXQ-MhCSUykTa8QbdxokOhl3BP7dpGENVEdJp_dI',
    'XndCF5lglpf_Y23dIutf2hEHEsiw80VxNiNs4pa6lxM',
    '_VLV1ofwwXQx1U8s3U9mk-7Tgjc2QPk5nDa7Ty0PFkc',
    'HUOZrsAMN1LXAVI7I8_uUnoidgEfAc71EgcB10eeZM8',
  ]
  console.time(`${action}: ${description} - ${from.arweave}`)
  data = await fromArweave(transactionIds)
  console.timeEnd(`${action}: ${description} - ${from.arweave}`)

  paths = [
    '50k-movie-titles-1',
    '50k-movie-titles-2',
    '50k-movie-titles-3',
    '50k-movie-titles-4',
    '50k-movie-titles-5',
  ]
  console.time(`${action}: ${description} - ${from.do}`)
  data = await fromDO(paths)
  console.timeEnd(`${action}: ${description} - ${from.do}`)

  console.time(`${action}: ${description} - ${from.feral}`)
  data = await fromFeral(paths)
  console.timeEnd(`${action}: ${description} - ${from.feral}`)
}

;(main)()
