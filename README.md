# The Humble Potato 🥔

The Thot Leader Dividend. 🤑

💸 BETTER INTEREST THAN COMPOUND FINANCE 💰

<p align="center">
  <img width="1000px" src="https://github.com/bneiluj/TheHumblePotato/blob/master/public/assets/theHumblePotato.png" />
</p>

Context: https://devpost.com/software/the-humble-potato-xd4bf5

# Recap

## Inspiration

The Blockchain / Crypto space is overrun with nonsubstantive trolling, and there is no place where this is more evident than Twitter. The Humble Potato passes hands as thought leaders pass off the burden of paying for their thoughtlessness. When The Humble Potato is hot, you pass it on. Fast. Or You Loose Followers. Basically, Followers have to choose between making money from the lottery or keep following the "Humblee" if they value the `Humblee`'s content worth more than the `Lottery` Pot.

### Quick workflow

1. The `DAO` selects a `Humblee` to send `The Humble Potato` to. 

2. The `Humblee` has `2h` to pay the `Lottery Pool` which is set to `2% fee` of the `Humblee`'s `Total Followers` (can be modified / adjusted by the `DAO`). For example, if the `Humblee` has 70,000 Followeers, the `donation` is set to `$1400` (70,000 * 0.02). 

3. If `Humblee` pays the `Donation` to the `Lottery Pool`, the smart contract then triggers the `Humiliation Period` where the `Humblee` must apologize on Twitter. The `Humblee` can then signal another `Humblee` to send the potato to, although the `DAO` has authority over the final call. 

4. If the `Humblee` doesn't want to donate 2% fees to the pool, the smart contract triggers the `Suffering Period`, a `7 day` period where people can join the `Lottery Pool` to unfollow the `Humblee`. Only people who unfollow the `humble` can participate to the lottery. Two snapshops are taken during the lottery period, one randomly (to avoid unfollowing and re-following during the period) and one at the end to verify that participants are not following the `humblee`. The Humble Potato uses Chainlink to tamper-proof the verification.  

5. At the end of the `Lottery Period`, the winner wins the `yield`, `interests` generated by the `Lottery Pool`. The `Humble Potato` expects to generate a better yield than `http://compound.finance` as it will receive donations from the `Suffering Period` and the `Humiliation Period` mechanisms.

6. The `DAO` sends the money back. There is only one winner and no loosers! 😳 

7. The `DAO` sends the `Humble Potato` to another target. 🔥

### Addons

1. *Insurance scheme*: Users subscribe to an `Insurance scheme`. It's a monthly membership (`0.5%` fee of your total followers) to avoid receiving the `The Humble Potato`.

2. *Customer service*: Users subscibe to `Customer Service`.  It's a monthly membership (`0.1%` fee of your total followers) where users get notified by `Whatsapp`, `Telegram` or `Phone` as soon as they get targeted by The Humble Potato so that they have time to pay the `Ransom` (donate) into the pool and avoid the `Suffering Period`. 

3. *Rewards*: A bunch of different NFT will be distributed to `Humblees` and Lottery participants. For example, `The Humiliation Badge`, `The Suffering Badge`, `The Fastest Looser Badge` etc...

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

## Smart Contracts

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
