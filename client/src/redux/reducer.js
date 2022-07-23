const initialState = {
    countries: [],
    countryDetail: [],
    activities: [],
    isFilter: true,
    currentPage: 1,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_COUNTRIES': {
            return {
                ...state,
                isFilter: action.filter,
                countries: action.payload,

            }
        }
        case 'GET_COUNTRY_DETAIL': {
            return {
                ...state,
                countryDetail: action.payload
            }
        }
        case 'GET_ACTIVITIES': {
            return {
                ...state,
                activities: action.payload
            }
        }
        case 'GET_COUNTRIES_BY_CONTINENT': {
            return {
                ...state,
                countries: action.payload
            }
        }

        case 'GET_COUNTRIES_BY_ACTIVITIES': {
            return {
                ...state,
                countries: action.payload
            }
        }
        case 'SET_COUNTRIES': {
            return {
                ...state,
                countries: action.payload
            }
        }
        case 'POST_ACTIVITY': {

            return {
                ...state,
                activities: action.payload
            }
        }
        case 'SET_PAGE': {
            return {
                ...state,
                currentPage: action.payload
            }
        }

        case 'RESET_DETAIL': {
            return {
                ...state,
                countryDetail: []
            }
        }
        default: return state
    }
}

export default reducer;