import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
Vue.use(Vuetify);

export default (ctx) => {
	const vuetify = new Vuetify({
		icons: {
			iconfont: 'md',
			values: {}
		},
		theme: {
			dark: false,
			themes: {
				light: {
					primary: '#2753BB',
					accent: colors.deepPurple.accent3,
					secondary: '#31C7A3',
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent4,
					themeColor: '#509E96',
					ctaColor: '#3472B7',
					fontColor: '#ffffff'
				}
			}
		}
	});

	ctx.app.vuetify = vuetify;
	ctx.$vuetify = vuetify.framework;
};
