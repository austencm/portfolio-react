const textToSVG = require('text-to-svg').loadSync();



function TextToSVGWebpackPlugin(options) {


}

TextToSVGWebpackPlugin.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
      var regex = new RegExp(/(<svgtext>(.+)<\/svgtext>)/i)
      htmlPluginData.html = htmlPluginData.html.replace(/(<svgtext>(.*)<\/svgtext>)/ig, function(match) {
        self.covertTag(match, callback)
      });

      // callback(null, htmlPluginData);
    });
  });

};

TextToSVGWebpackPlugin.prototype.convertTag = function(match, offset, string) {
  return textToSVG.getSVG(match);
}

module.exports = TextToSVGWebpackPlugin;
