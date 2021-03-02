# bgrio-framework

Welcome  
This project is a framework to create boardgames in Typescript, React and SocketIO.
It my hobby to create some games. I was using Boardgame Arena Studio, on my PHP times. And now, I could use [boardgame.io](https://boardgame.io).

But the goal is to do my sandbox main project and use it to be the beta tester of it too ^^

## Create a new game

A game is composed of X parts :
- UI :
    - handles socket events
    - emits socket events
    - routing from game state
- game parameters:
    - icon
    - title
    - describtion
    - player settings
        - min player
        - max player
        - default number of player
    - specific parameters
- socket events to add on server

## How to install a game

The mission is to finally only have to npm install the game and use it shortly :

#### **`index.ts`**
```typescript
import { BGRIO_GameEvents, BGRIO_Server } from 'bgrio-framework'
import {server as LimitLimit} from 'bgrio-limitlimit'

const games: BGRIO_GameEvents = [
    LimitLimit
]

const server = new BGRIO_Server(games)
server.start()
```

#### **`index.tsx`**
```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BGRIO_GameUI, BGRIO_App } from 'bgrio-framework'
import {UI as LimitLimit} from 'bgrio-limitlimit'

const games: BGRIO_GameUI[] = [
    LimitLimit
]

ReactDOM.render(
  <BGRIO_App games={games} />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
```

