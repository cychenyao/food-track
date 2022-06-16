export const TOGGLE = 'TOGGLE';
export function toggle(view) {
    return {
        type: TOGGLE,
        view: view
    };
}