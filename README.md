# await-to-js

包装 async await，可便于获得error信息
 
## 使用

```js
  // error1: null  result1: { name: 'lucy', age: 12 }
  const [error1, result1] = await to(Promise.resolve({ name: 'lucy', age: 12 }), {});
  // error2: { errorCode: 200 }  result2: undefined
  const [error2, result2] = await to(Promise.reject({ errorCode: 200 }), {});
```