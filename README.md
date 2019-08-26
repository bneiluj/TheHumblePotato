# The Humble Potato

The Thot Leader Dividend

<p align="center">
  <img width="400px" src="https://github.com/bneiluj/TheHumblePotato/blob/master/public/assets/theHumblePotato.png" />
</p>

Context: https://devpost.com/software/the-humble-potato-xd4bf5

# Recap

## Inspiration
The Ethereum (as well as greater blockchain community) is overrun with nonsubstantive trolling, and there is no place where this is more evident than Twitter. We setout to solve this problem via a Universal Basic Income-style economic incentive we call the “Thought Leader Dividend”, administered via a DAO.

The Humble Potato passes hands as thought leaders pass off the burden of paying for their thoughtlessness.

## What it does
The Potato DAO aligns the incentives of the community to help “thought leaders” avoid destructive social media behavior and reward content that builds the community’s collective knowledge.

In order to aggregate a campaign to relieve thought leaders of their superficial followers, we adjust the incentives of the community. We eliminate distracting content via an incentive mechanism that's economically irresistible. Posters throughout the community are incentivised to be mindful of the content they create and better ensure its usefulness.

The Humble Potato DAO mechanism recognizes when a user with a connected account has unfollowed the Humblee (the “Thought Leader” who is getting “Humbled”). The Potato enters the “Suffering Period” where participants join the pool and cease following the Humblee. The Humblee then has the opportunity to donate to the pool to pass the Potato to the next target and avoid further “humbling”.

If the potato is passed (via a “donation”), the “Suffering Period” ends and we enter the “Humiliation Period”, at which time the Humblee must post an apology for their disappointingly lowbrow Twitter content via a tweet. This tweet must contain specific text (verified via Chainlink) outlining the Humblee’s understanding of the nature of their transcreation to the community.

The “donation” required to pass the Potato is kept low via a price discovery mechanism, in order to ensure that the potato may be continually passed between participants for extended durations. Thus, the on-going passing of the Potato results in continual injections into the pool resulting in a “Tax” on the community’s “Thought Leaders”.

## How we built it
We track followers via Chainlink, using a snapshot of each Thought Leader's follower list. Compounded interest of all contributes to the pool is then paid out to the winner of the PoolTogether-style no-loss lottery. The pool includes the followers' collateral (which is returned after the "Suffering Period") as well as "Tax" donations from Thought Leaders who opted to pass the Humble Potato (this collateral is not returned after the "Suffering Period").

Node servers authenticates the Twitter API and retrieves the user’s ID React frontend to interact with the contracts Chainlink to pass data from Twitter API to verify follower statuses 3box to manage user profile data

# Working Product

## Workflow
<p align="center">
  <img width="400px" src="https://github.com/bneiluj/TheHumblePotato/blob/master/public/assets/workflow.png" />
</p>

## Welcome page
<p align="center">
  <img width="400px" src="https://github.com/bneiluj/TheHumblePotato/blob/master/public/assets/entry.png" />
</p>


## Payment page
<p align="center">
  <img width="400px" src="https://github.com/bneiluj/TheHumblePotato/blob/master/public/assets/payment.png" />
</p>


## Target example
<p align="center">
  <img width="400px" src="https://github.com/bneiluj/TheHumblePotato/blob/master/public/assets/target.png" />
</p>

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
