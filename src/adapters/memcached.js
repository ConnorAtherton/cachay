//
// Redis adapter
//

import Adapter from '../adapter'
import memcached from 'memcached'

export class MemcachedAdapter extends Adapter {
  connect(connectionOptions) {
  }

  get(key, strategy) {

  }

  set(key, value, options = Adapter.defaultOptions) {

  }
}
