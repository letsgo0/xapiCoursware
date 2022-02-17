module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  // plugins: ['@babel/plugin-transform-modules-umd'], //主要是这个
  // exclude: ['node_modules'],
};

// module: {
//   rules: [
//     {
//       test: /\.m?js$/,
//       exclude: /node_modules/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: [
//             ['@babel/preset-env', { targets: "defaults" }]
//           ]
//         }
//       }
//     }
//   ]
// }