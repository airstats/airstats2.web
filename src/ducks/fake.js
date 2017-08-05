import Immutable from 'immutable'

export default function fake (state = Immutable.fromJS({}), action) {
  switch (action.type) {
    default:
      return state
  }
}
