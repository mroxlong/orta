# Floopi

Floopi is a tool I made because I found myself needing to setup MySQL and pooling often and so it naturally came to be.



### Install
```npm install --save floopi```

### Use

#### Import
```js
const  Floopi  = require("floopi")
```
ES6
```js
import { Floopi } from "floopi";
```
#### Create New Instance
```js
const db = new Floopi({
    host: 'localhost',
    database: 'test',
    user: 'root',
    password: '',
    port: 3306,
})

```

#### Write Some Queries
```js
db.query("SELECT * FROM `pets`").then((results)=>{
    console.log(results)
}).catch((e)=>{
    throw e
})
```
OR 
```js
try{ 
    const pets = await db.query("SELECT * FROM `pets`")
    console.log(pets)
}catch (e) {
    throw e
}

```
#### Param Binding
```js
db.query("SELECT * FROM `pets` WHERE `type`=?",["cat"]).then((results)=>{
    console.log(results)
})
```

```js
db.query("SELECT * FROM ?? WHERE `type`=?",["pets","cat"]).then((results)=>{
    console.log(results)
})
```