const defaultUser = {
    id: null,
    phone: '',
    name: '',
    email: '',
    permissions: [],
}

const user = {
    namespaced: true,
    state: {
        current: defaultUser,
    },
    mutations: {
        setCurrent(state, payload) {
            // `state` указывает на локальное состояние модуля
            state.current = payload;
        },
    },
    getters: {
        current(state) {
            return state.current;
        },
    },
    actions: {
        register({commit}, payload) {
            return new Promise((resolve, reject) => {
                this.axios.get('/api/user/current')
                    .then(({data}) => {
                        commit('setCurrent', data)

                        resolve(data)
                    })
                    .catch((response) => {
                        reject(response)
                    })
            })
        },
    },
};

export default user;
