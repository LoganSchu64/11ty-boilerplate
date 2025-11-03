module.exports = function(eleventyConfig){
  // Minimal Liquid shortcode: featureCard(title img excerpt url)
  if(typeof eleventyConfig.addLiquidShortcode === 'function'){
    eleventyConfig.addLiquidShortcode('featureCard', function(title, img, excerpt, url){
      return `<a class="card" href="${url}"><img src="${img}" alt="${title}" loading="lazy"/><h3>${title}</h3><p>${excerpt}</p></a>`;
    });
  }

  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('styles');

  return { dir: { input: '.', includes: '_includes', output: '_site' } };
};