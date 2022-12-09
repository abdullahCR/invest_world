import { combineReducers } from 'redux'

import loginReducers from '../../Api/UserApi/login/reducers'

const index = combineReducers({
  login: loginReducers,
})

export default index
