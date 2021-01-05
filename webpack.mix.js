const mix = require("laravel-mix");
const webpack = require("webpack");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
require("laravel-mix-merge-manifest");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    output: {
        chunkFilename: "js/[name].js",
    },
    // output: {
    //     chunkFilename: "js/[name].[contenthash].js",
    //     filename: "[name].[contenthash].js"
    // },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new webpack.ContextReplacementPlugin(
            /moment[\/\\]locale/,
            // A regular expression matching files that should be included
            /(vi)\.js/
        )
    ]
})
    .react("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .mergeManifest();
// .less("node_modules/antd/dist/antd.less", "public/css/antd.mod.css", {
//     modifyVars: {
//         "primary-color": "#4bab92",
//         "link-color": "#4bab92"

//         // "primary-color": "#1890ff", // primary color for all components
//         // "link-color": "#1890ff", // link color
//         // "success-color": "#52c41a", // success state color
//         // "warning-color": "#faad14", // warning state color
//         // "error-color": "#f5222d", // error state color
//         // "font-size-base": "13px", // major text font size
//         // "heading-color": "rgba(0, 0, 0, 0.85)", // heading text color
//         // "text-color": "rgba(0, 0, 0, 0.65)", // major text color
//         // "text-color-secondary": "rgba(0, 0, 0, 0.45)", // secondary text color
//         // "disabled-color": "rgba(0, 0, 0, 0.25)", // disable state color
//         // "border-radius-base": "2px", // major border radius
//     },
//     javascriptEnabled: true,
//     compress: true
// });

mix.disableNotifications();
