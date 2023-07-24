# markdown-it-img-src-render

> Render img src the way you want.

## Example

``` ts
const md = require("markdown-it")()

md.use(require("markdown-it-img-src-render", {
    render(src: string){
        return "file:///E:/Pictures/" + "src"
    }
}))
```
