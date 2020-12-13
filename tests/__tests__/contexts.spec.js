import '@testing-library/jest-dom/extend-expect';

import { noOp } from '../../src/contexts';

describe('utils/contexts', () => {
    test('no op should return undefined', () => {
        const value = noOp();
        expect(value).toBe(undefined);
    });
});
