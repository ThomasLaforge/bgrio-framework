# bgrio-framework

Welcome  
This project is a framework to create boardgames in Typescript, React and SocketIO.
It's my hobby to create some board games. I was using Boardgame Arena Studio, on my PHP times. And now, I could use [boardgame.io](https://boardgame.io).

But the goal is to do my sandbox main project and use it to be the beta tester of it too ^^

## Road map

Make things tested, make small liveries
The Monorepo value ?
- make Typescript work in all the project
    We need one tsconfig.json file for global and more specific one foreach packages
    We need to be able to import shared stuffs inside other packages
- yarn install on all repositories for root
- create npm package(s) to use parts of the framework
    should it be only one package or smalls only or the two possibilities 

## Create a new game

A game is composed of X parts :
- UI :
    - handles socket events
    - emits socket events
    - routing from game state
- game parameters:
    - icon
    - title
    - description
    - player settings
        - min player
        - max player
        - default number of player
    - specific parameters
- socket events to add on server

## How to install a game ?

You first need to create a bgrio app :
```shell
npm install bgrio-framework
npx bgrio-framework create app my-game-app
```

After, you have to add content / games.
You can create a new one or you can install one done by someone else.
Install it and add it to the app.
Then, you have to start the bgrio app.
Here are an example :

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

## How to create a game ?

A boilerplate is accessible running

```shell
npx bgrio-framework create game my-game
```

It create a folder named my-game or whatever you want :)

```bash
my-game
└─── src
│   │   index.ts
│   │   server.ts
│   │   client.tsx
│   └─── modules
│       │   Card.demo.ts
│       │   Player.demo.ts
│       │   Game.demo.ts
│ package.json
│ tsconfig.json
│ README.md
```

### What to do now ?

There are a lot of prebuilt game components, for game model, web sockets events or even react components. It means you are still completely free to create your game with your patterns but for an easier start, extends them ^^
You have multiple npm packages to have the perfect toolbox for your game.
- @bgrio/ui: tsx package with some useful components. All packaged in a storybook app if you want to see cool components.
- @bgrio/core: ts package with helpers, framework initializer (server and ui)
- @bgrio/cli: toolbox to generate app, components from example, game skeleton, etc...