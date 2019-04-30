# ts-observer-pattern
A simple observer pattern implementation in TypeScript.  

```
npm install ts-observer-pattern
```

## Example

In the example that follows, I'm implementing a relationship bettween a magazine and it subscribers

```TypeScript
// Magazine.ts
import { Subject } from 'ts-observer-pattern'

class Magazine extends Subject
{
    private Observers: Observers[]

    public publish()
    {
        //Some code here
        this.Observer.notify("New edition available") //Here I passed a string,
        //but you can pass any data you want
    }
}
```

```TypeScript
// Subscriber.ts
import { Observer } from 'ts-observer-pattern'

class Subscriber implements Observer
{
    public update(data): this
    {
        //Do whatever you want here with the information passed by the Magazine object
    }
}
```

```TypeScript
// main.ts
import { Magazine } from './Magazine'
import { Subscriber } from './Subscriber'

let Coders = new Magazine

let Matt = new Subscriber
let Ana = new Subscriber

Coders.attach(Matt)
Coders.attach(Ana)
```
