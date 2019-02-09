// https://webpack.js.org/guides/dependency-management/#require-context
const requireContext = require.context(
    '.',
    false,
    /[a-z]\w+\.(js)$/
)

requireContext.keys().forEach(file => requireContext(file))



// const files = {}

// // https://webpack.js.org/guides/dependency-management/#require-context
// const requireContext = require.context(
//   '.',
//   false,
//   /[a-z]\w+\.(js)$/
// )

// requireContext.keys().forEach(file => {
//   const fileConfig = requireContext(file)

//   const fileName = file.replace(/^\.\/(.*)\.\w+$/, '$1')

//   Object.assign(files, {
//         [fileName]: fileConfig.default || fileConfig
//     })
// })

// export  files
