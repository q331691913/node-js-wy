function Htmlscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&|/g, match => {
        switch (match) {
            case '<':

                return '&lt'
            case '>':

                return '&gt'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
            default:
                break;
        }
    })
}