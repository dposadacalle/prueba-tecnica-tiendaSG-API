const utils = {

    isNullOrUndefined: function(variable) {

        let res = false;

        try {

            if (typeof variable === 'undefined' || variable === null)
                res = true;
        } catch (error) {
            res = false;
        }

        return res;
    }
}

module.exports = { utils };