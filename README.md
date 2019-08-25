# TheHumblePotato

The Thot Leader Dividend

# Local Usage

Clone the repo and then install deps:


Recommended node version: `v10.16.0`

`npm install`

## Smartcontracts

Copy over .envrc and allow [direnv](https://direnv.net/):

```
$ cp .envrc.example .envrc
$ direnv allow
```

Run brew install `direnv` if not installed yet.

Start `ganache-cli`:

```
ganache-cli -l 8000038 -i 1234 -e 100000 -a 10 -u 0 -g 1000000000 -m "$HDWALLET_MNEMONIC"
```

`npm install`
`npm script session`
`npm script push`
`npm script migrate`

# Run

`npm start`

# Interact with the Pool
`npx truffle console --network local`
