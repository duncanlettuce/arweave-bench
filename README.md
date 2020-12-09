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

Fetch: 5x 50k movie titles - ArWeave: 9.986s
Fetch: 5x 50k movie titles - Digital Ocean: 3.142s
```

Small note: the `50k movie title` files are serialized using MessagePack. In this way, they're not 1:1 with the `250k movie titles` file, but the difference in byte length is low enough that the results remain meaningful.