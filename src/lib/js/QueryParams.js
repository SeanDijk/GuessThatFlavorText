//https://dev.to/mohamadharith/mutating-query-params-in-sveltekit-without-page-reloads-or-navigations-2i2b
export const replaceStateWithQuery = (map) => {
    const url = new URL(window.location.toString());
    for (let [k, v] of Object.entries(map)) {
        if (!!v) {
            url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v));
        } else {
            url.searchParams.delete(k);
        }
    }
    history.replaceState({}, '', url);
};
