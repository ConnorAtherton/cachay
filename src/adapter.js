import { lru, ttl } from 'strategies'

export default class Adapter {
  get strategies()  {
    { lru, ttl }
  }

  get defaultOptions() {
    {
      // TODO
    }
  }

  //
  // Adapter interface
  //
  // The following 3 methods should be implemented
  // by all cache adapters.
  //
  // connection
  //
  // Connects to the external service and stores the
  // connection inside the instance variable using
  // `this.connection`
  //
  // get
  //
  // set
  //
}
