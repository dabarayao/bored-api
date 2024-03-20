const Storage = {
    getItem(key) {
        return localStorage.getItem(key);
    },

    setItem(key, data) {
        let keyValue = '';

        if (typeof data !== 'string') {
            keyValue = JSON.stringify(keyValue);
        }

        localStorage.setItem(key, keyValue);
    },
    deleteItem(key) {
        localStorage.removeItem(key);
    },
};

export default Storage;
