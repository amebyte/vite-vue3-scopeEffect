import { effectScope } from "vue"
export function createGlobalState(stateFactory) {
    let initialized = false;
    let state;
    const scope = effectScope(true)
    return ((...args) => {
      if (!initialized) {
        // state = stateFactory(...args);
        state = scope.run(() => stateFactory(...args));
        initialized = true;
      }
      return state;
    });
}