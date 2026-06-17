/**
 * safeStorage.js
 * Provides a safe wrapper for localStorage with an in-memory fallback
 * if localStorage is blocked or unavailable (e.g., in some private modes or file:// protocol).
 * Ensures that "The operation is insecure" (SecurityError) does not crash the app.
 */

window.safeStorage = (function() {
    let nativeStorage;
    const memoryStorage = {};
    
    const mockStorage = {
        getItem: function(key) {
            return Object.prototype.hasOwnProperty.call(memoryStorage, key) ? memoryStorage[key] : null;
        },
        setItem: function(key, value) {
            memoryStorage[key] = String(value);
        },
        removeItem: function(key) {
            delete memoryStorage[key];
        },
        clear: function() {
            for (let key in memoryStorage) {
                if (Object.prototype.hasOwnProperty.call(memoryStorage, key)) {
                    delete memoryStorage[key];
                }
            }
        },
        get length() {
            return Object.keys(memoryStorage).length;
        },
        key: function(i) {
            const keys = Object.keys(memoryStorage);
            return keys[i] || null;
        }
    };

    function testStorage(s) {
        try {
            if (!s) return false;
            const testKey = '__storage_test__';
            s.setItem(testKey, testKey);
            s.removeItem(testKey);
            return true;
        } catch (e) {
            return false;
        }
    }

    try {
        // Accessing window.localStorage can throw SecurityError in some browsers if cookies are blocked
        if (typeof window !== 'undefined' && window.localStorage) {
            nativeStorage = window.localStorage;
            if (!testStorage(nativeStorage)) {
                nativeStorage = null;
            }
        }
    } catch (e) {
        nativeStorage = null;
    }

    if (!nativeStorage) {
        console.warn("localStorage is blocked or unavailable. Falling back to in-memory storage. Changes will not persist across sessions.");
        return mockStorage;
    }

    // Return a wrapper that catches errors on every call (e.g. if permissions change mid-session or quota exceeded)
    return {
        getItem: function(key) {
            try {
                return nativeStorage.getItem(key);
            } catch (e) {
                return mockStorage.getItem(key);
            }
        },
        setItem: function(key, value) {
            try {
                nativeStorage.setItem(key, value);
            } catch (e) {
                console.warn("Failed to write to localStorage, using in-memory fallback:", e);
                mockStorage.setItem(key, value);
            }
        },
        removeItem: function(key) {
            try {
                nativeStorage.removeItem(key);
            } catch (e) {
                mockStorage.removeItem(key);
            }
        },
        clear: function() {
            try {
                nativeStorage.clear();
            } catch (e) {
                mockStorage.clear();
            }
        },
        get length() {
            try {
                return nativeStorage.length;
            } catch (e) {
                return mockStorage.length;
            }
        },
        key: function(i) {
            try {
                return nativeStorage.key(i);
            } catch (e) {
                return mockStorage.key(i);
            }
        }
    };
})();
