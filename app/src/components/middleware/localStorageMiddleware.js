import { internalMemory } from "../../utility/internalMemory";

const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    // Salva lo stato del carrello dopo ogni azione
    if (action.type.startsWith("cart/")) {
        const state = store.getState();
        internalMemory.save("cart", state.cart.cart);
    }

    return result;
};

export default localStorageMiddleware;
