import { mapGetters,mapMutations } from 'vuex'
import Vue from 'vue'
export default {
    install(Vue) {
        Vue.mixin({
            computed:{
                ...mapGetters({
                    vtheme: 'theme',
                })
            },
            methods:{
                ...mapMutations({
                    hide:'app/hide',
                    show: 'app/show',
                    vGetTheme:'GET_THEME',
                })
            }
        })
    }
}
