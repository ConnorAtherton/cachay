//
// Redis adapter
//

import Adapter from '../adapter'

const memoryStore = {}

export class MemoryAdapter extends Adapter {
  connect(connectionOptions) {
    // noop

  }

  get(key, strategy) {
    return memoryStore[key]
  }

  set(key, value, options = Adapter.defaultOptions) {

  }
}
