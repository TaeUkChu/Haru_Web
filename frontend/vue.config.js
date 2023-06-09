const path = require("path");
//const FileManagerPlugin = require("filemanager-webpack-plugin-fixed");
const FileManagerPlugin = require("filemanager-webpack-plugin");
module.exports = {
  transpileDependencies: ["vuetify"],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      staticOptions: {
        index: "home.html",
      },
    },

    proxy: {
      "/blog": { target: "http://127.0.0.1:8000", changeOrigin: true },
      "/api": { target: "http://127.0.0.1:8000", changeOrigin: true },
      "/http://116.38.220.14/resultAPI": {
        target: "http://116.38.220.14/resultAPI", // xhr only
        changeOrigin: true,
      },
    },
  },
  outputDir: "dist",
  publicPath: "/",
  assetsDir: "static",

  pages: {
    home: {
      template: "public/index.html",
      entry: "src/pages/main_home.js",
      filename: "home.html",
      title: "VueDjangoWebpack/home.html",
      minify: false,
    },

    post_list: {
      template: "public/index.html",
      entry: "src/pages/main_post_list.js",
      filename: "post_list.html",
      title: "VueDjangoWebpack/post_list.html",
      minify: false,
    },

    post_detail: {
      template: "public/index.html",
      entry: "src/pages/main_post_detail.js",
      filename: "post_detail.html",
      title: "VueDjangoWebpack/post_detail.html",
      minify: false,
    },

    post_detail_img: {
      template: "public/index.html",
      entry: "src/pages/main_post_detail_img.js",
      filename: "post_detail_img.html",
      title: "VueDjangoWebpack/post_detail_img.html",
      minify: false,
    },

    post_img_list: {
      template: "public/index.html",
      entry: "src/pages/main_post_img_list.js",
      filename: "post_img_list.html",
      title: "VueDjangoPhoto/post_img_list.html",
      minify: false,
    },

    // text_editor: {
    //   template: "public/index.html",
    //   entry: "src/pages/main_text_editor.js",
    //   filename: "text_editor.html",
    //   title: "VueDjangoWebpack/text_editor.html",
    //   minify: false,
    // },
  },

  configureWebpack: {
    plugins: [
      new FileManagerPlugin({
        events: {
          onStart: {
            delete: [
              {
                source: "../backend/static/**/",
                options: { force: true },
              },
              {
                source: "../backend/templates/**/",
                options: { force: true },
              },
            ],
          },

          onEnd: {
            copy: [
              { source: "dist/static", destination: "../backend/static/" },
              {
                source: "dist/favicon.ico",
                destination: "../backend/static/img/",
              },
              {
                source: "dist/home.html",
                destination: "../backend/templates/",
              },
              {
                source: "dist/post*.html",
                destination: "../backend/templates/blog/",
              },
            ],
          },
        },
      }),
    ],
  },

  css: {
    extract: { ignoreOrder: true },
  },
};
