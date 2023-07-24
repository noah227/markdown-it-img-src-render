import MarkdownIt from "markdown-it";

// 编写参考了
// https://github.com/architect/markdown-it-arc-static-img/blob/main/index.js
// https://github.com/tatsy/markdown-it-imsize/blob/master/lib/index.js


/**
 * Render image src as you want.
 * @param md
 * @param options
 */
const _ = (md: MarkdownIt, options?: { render: (src: string) => string }) => {
    const {render} = {...options}
    const defaultRender = md.renderer.rules.image || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
    }
    md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const src = token.attrGet("src") as string
        token.attrSet("src", render ? render(src) : src)
        return defaultRender(tokens, idx, options, env, self)
    }
}

export default _
