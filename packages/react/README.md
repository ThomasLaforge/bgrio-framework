# BGRIO React

## Goal

This package is a toolbox for UI in react web app.
You have a beautiful storybook to play with and learn about the UI lib.
It's still WIP but feel free to do a PR for any component you feel useful to share.

## How to use

```bash
npm i @bgrio/react-ui
```

```tsx
import React, { useState } from "react";
import {Dice} from "@bgrio/react-ui";

export default const Roll = () => {
    const [value, changeValue] = useState(1)
    
    return <div>
        <Dice 
            value={value} 
            onChange={changeValue}
            color="red"
            dotColor="white"
        />
    </div>
}
```

All is in Typescript, so you have all types definitions, components props and of course the storybook to see what you can use.

We can add some new props and fix some bugs on components but if something could brake your game is needed, we will make it on a new component and reset the naming on each major release. So feel free to update your packages and if you need new major release, follow instructions on [Release Page](./docs/ReleaseMigrations.md)