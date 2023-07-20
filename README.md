# markdown-it-img-src-render

Render img src as what you like, support both nodejs and browser.

## Example

``` ts
const md = require("markdown-it")()

md.use(require("markdown-it-img-src-render", {
    render(src: string){
        return "file:///E:/Pictures/" + "src"
    }
}))
```
