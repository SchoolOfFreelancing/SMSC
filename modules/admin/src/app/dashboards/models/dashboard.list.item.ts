export class DashboardListItem<T> {
    private list: Array<T> = [];

    constructor(len?: number) {
        // @fix it
        // if (len) {
        //     for (let i = 0; i < len; i++) {
        //         this.list.push('');
        //     }
        // }
    }

    /**
     * Set/Add item
     *
     * @param value - string value
     * @param index - index to set in target position or add to the end of list
     * @returns {null} - return Null if property not exist
     */
    public setItem(value: T, index?: number) {
        if (index != undefined) {
            this.list[index] = value;
        } else {
            this.list.push(value);
        }
    }

    /**
     * Get item of type
     *
     * @param index - index get needed item
     * @returns {any} - string if item exist or null if not
     */
    public getItem(index: string): T {
        if (index != undefined) {
            return this.list[index];
        }

        return null;
    }

    /**
     * Remove item by index
     *
     * @param index - item position
     */
    public removeItem(index: string) {
        this.list.splice(Number(index), 1);
    }

    public getAll(): Array<T> {
        return this.list;
    }

    /**
     * Merge array
     *
     * @param list
     */
    public merge(list: Array<T>) {
        this.list = this.list.concat(list);
    }
}
