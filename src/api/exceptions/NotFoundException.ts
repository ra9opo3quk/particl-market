// Copyright (c) 2017-2019, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE

/**
 * NotFoundException
 * ----------------------------------------
 *
 * This should be used if a someone requests a
 * entity with a id, but there is no entity with this id in the
 * database, then we throw this exception.
 */

import { Exception } from '../../core/api/Exception';


export class NotFoundException extends Exception {
    constructor(id?: number | string) {
        super(404, `Entity with identifier ${id} does not exist`);
    }
}
