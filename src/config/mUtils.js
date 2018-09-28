/**
 * 在localStorage中存储值
 * @param {String} name 
 * @param {String} content  
 */
export const setLocalStorageItem = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}
/**
 * 获取localStorage中对应的项目
 * @param {String} name 
 */
export const getLocalStorageIem = (name) => {
    if (!name) return;
    return window.localStorage.getItem(name);
}
/**
 * 删除localStorage中对应的列表
 * @param {String} name 
 */
export const removeLocalStorage = (name) => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 合并两个数组并去重
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
export const getUnionArray = (arr1, arr2) => {
    return Array.from(new Set([...arr1, ...arr2]));
}
/**
 * 如果小于10返回0开头的两位数
 * @param {Number} num 
 */
export const getHandleNumber = num => {
    return num < 10 ? '0' + num : num;
}












