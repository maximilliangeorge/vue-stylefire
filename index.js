import 'core-js'
import styler from 'stylefire'

const VuePopmotion = {
	install(Vue) {

		Vue.directive('styler', {
	    inserted (el, binding, vnode, oldVnode) {

				const { arg } = binding

				if (!vnode.context.$stylers) {
					vnode.context.$stylers = {}
				}

				vnode.context.$stylers[arg] = styler(el)

	    }
	  })

		if (typeof window !== 'undefined' && window.Vue) {
			window.Vue.use(VuePopmotion)
		}

	}
}

export default VuePopmotion
