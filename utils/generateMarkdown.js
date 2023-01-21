function generateMarkdown(data) {
    const title = data.title
    return `<div align=center><h1>${title}</h1></div>`
}
module.exports = generateMarkdown;

