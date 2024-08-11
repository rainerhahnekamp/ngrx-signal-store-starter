import { signalStore, withState } from "@ngrx/signals";

export function createStoreClass() {
  class Store extends signalStore(withState({ id: 1, name: "Konrad" })) {}

  return Store;
}
