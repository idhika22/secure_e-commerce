const path = require("path");

module.exports = {
  mode: 'production',
  entry: "./src/main.tsx",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], 
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",    
          "postcss-loader"
        ],
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.app.json", 
              transpileOnly: true
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
              sizes: [480, 768, 1200],  // Generate these widths
              placeholder: true,        // Optional: Generate low-res placeholder
              name: 'images/[name]-[width].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",  // CSS files will have contenthash
    }),
  ],
  

};
