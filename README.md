# Acey-Deucey.github.io

Acey-Deucey, AKA In-between, Introduction and optimal strategy

## Basic strategy

Players attempting to middle two posts with a spread of less than 8 will show a long term loss. 

using EV (Estimate outcome Value) calculation

Minimal winning spread is **8**.

```
  EV for winning = 8 Card of 13 Card to win = 8/13 positive EV
  EV for losing:
    EV when losing outside the range of cards =
      Take out 8 card out 13 which is winning card,
                                              13-8 = 5
      Take out 2 more card which is hitting the post (hitting post required paying twice the bid), 
                                              5-2 = 3
      No. of cards hitting out of range and not POST cards = 3
      EV for not winning and not hitting post = 3/13
      
    EV when losing and hitting the POST = 
      If two fo the POST cards are different then the probability of hitting it = 2/13
      *BUT* because hitting POST pay twice amount of bid therefore, 
                                      2 * 2/13 = 4/13
      
  Total EV = EV for winning - EV for losing
           = 8/13 - (3/13 + 4/13)
           = 1/13

Therefore, minimum winning spread is 8 between two post card.
```
