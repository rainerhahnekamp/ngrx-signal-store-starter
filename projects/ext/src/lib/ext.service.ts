import { signalStore, withState } from "@ngrx/signals";
import { State } from "@ngrx/store";

export function createStoreClass<State>(state: State) {
  class Store extends signalStore(withState(State)) {}

  return Store;
}
