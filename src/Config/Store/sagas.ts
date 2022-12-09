import { all } from 'redux-saga/effects'

import login from '../../Api/UserApi/login/sagas'

export default function* rootSaga(): Generator {
  yield all([login()])
}
