import 'core-js'
import styler from 'stylefire'

const VueStylefire = {
	install(Vue) {

		Vue.directive('styler', {
	    inserted (el, binding, vnode, oldVnode) {

				const { arg } = binding

				if (!vnode.context.$stylers) {
					console.log(vnode)
					vnode.context.$stylers = {}
				}

				vnode.context.$stylers[arg] = styler(el)

	    }
	  })

		// if (typeof window !== 'undefined' && window.Vue) {
		// 	window.Vue.use(VueStylefire)
		// }

	}
}

export default VueStylefire
