import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'

const config = {
    input: 'src/index.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'react-metro-datepicker',
        globals: {
            react: "React"
        }
    },
    plugins: [
        postcss({
            extract: true,
            plugins: []
        }),
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ],
}
export default config