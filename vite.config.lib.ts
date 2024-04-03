import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		dts({
			tsconfigPath: './tsconfig.lib.json',
		}),
	],
	resolve: {
		alias: [
			{
				find: 'src',
				replacement: path.resolve(__dirname, 'src'),
			},
		],
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.tsx'),
			formats: ['es'],
			fileName: () => 'index.js',
		},
		rollupOptions: {
			external: ['react', 'react-dom', '@emotion/react', '@emotion/styled', 'emotion-normalize'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'@emotion/react': '@emotion/react',
					'@emotion/styled': '@emotion/styled',
					'emotion-normalize': 'emotion-normalize',
				},
			},
		},
	},
});
