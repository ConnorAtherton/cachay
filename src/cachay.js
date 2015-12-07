import Adapter from '../adapter'

export default class Cache {
  //
  // let cache = new Cache('memory', {
  //  // options..
  // })
  //
  // @param options - Hash
  //   namespace - string - prepended to each key
  //   strategy  - string - the stratgey to use for value retrieval
  constructor(adapter, options) {
    // TODO
    this.strategy = options['strategy'] || Adapter.strategies.lru
  }

  get(key) {
    key = this.convertKey(key)
    return this.adapter.get(key, this.strategy)
  }

  set(key, val, options) {
    key = this.convertKey(key)
    options = this.merge(options)


    // mixes globally set options with
    return this.adapter.set(key, val, opts)
  }

  remove(key) {
    key = this.convertKey(key)
    return this.adapter.remove(key)
  }

  //
  // private
  //

  convertKey(key) {
    return `${this.namespace}${key}`
  }
}
