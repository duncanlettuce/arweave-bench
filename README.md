# ArWeave: Network Response Times

## Get started

```
> cd perferred/path
> git clone git@github.com:duncanlettuce/arweave-bench.git
> cd arweave-bench
> npm i
> node .
```

This will output response times, eg.

```
Fetch: 250k movie titles - ArWeave: 12.103s
Fetch: 250k movie titles - Digital Ocean: 2.739s

Fetch: 5x 50k movie titles as JSON - ArWeave: 9.986s
Fetch: 5x 50k movie titles as JSON - Digital Ocean: 3.142s
```

Note: the `50k movie title` files are serialized using MessagePack, so, in this way, they're not 1:1 with the `250k movie titles` file, but the difference ought to be neglible enough ƒor the results to remain meaningful.