import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

describe('./utils.js', () => {
    test('getFooterCopy returns ALX when index is true', () => {
        expect(getFooterCopy(true)).toBe('ALX');
    })

    test('getFooterCopy returns ALX Dashboard when index is false', () => {
        expect(getFooterCopy(false)).toBe('ALX main dahsboard');
    })
    

    test('getLatestNotification return the right message', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    })

    test('getFullYear return the current year', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    })
})