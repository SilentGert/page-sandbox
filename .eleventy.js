module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
    postcss([tailwindcss(require('./tailwind.config.js')), autoprefixer()])
      .process(cssCode)
      .then(
        (r) => done(null, r.css),
        (e) => done(e, null)
      )
  })
//  eleventyConfig.addPassthroughCopy('./src/assets/css')
  eleventyConfig.addWatchTarget('./src/assets/css/')
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
