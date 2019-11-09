const LOCAL_STORAGE_KEY = 'star-wars-app';

const defaultLocalStorageData = {
    theme: 'light',
};

const saveLocalStorageData = (key, data) => {
    const dataJson = JSON.stringify(data);
    localStorage.setItem(key, dataJson);
    return JSON.parse(dataJson);
};

const getLocalStorageData = key => {
    const localStorageData = localStorage.getItem(key);
    let dataJson = localStorageData && JSON.parse(localStorageData);
    if (!dataJson) {
        dataJson = saveLocalStorageData(key, defaultLocalStorageData);
    }
    return dataJson;
};

export const getDataFromLocalStorage = data => {
    const localStorageData = getLocalStorageData(LOCAL_STORAGE_KEY);
    const localData = localStorageData[data];
    return localData;
};

export const saveDataToLocalStorage = (dataKey, contentData) => {
    let localUserData = getLocalStorageData(LOCAL_STORAGE_KEY);
    if (localUserData) {
        localUserData = {
            ...localUserData,
            [dataKey]: contentData,
        };
    }
    saveLocalStorageData(LOCAL_STORAGE_KEY, localUserData);
    return localUserData[dataKey];
};
