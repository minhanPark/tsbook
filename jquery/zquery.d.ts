interface zQuery {
    (tag: string | string[]): zQueryIntance;
    (tag: zQueryIntance): zQueryIntance;
}
interface zQueryIntance {
    removeClass(param: string): this;
    addClass(param: string): this;
    addClass(callback: (this: zQueryIntance, index: number) => string): this;
    text(param: string): this;
    html(param: string): this;
    html(callback: (this: zQueryIntance, index: number) => string): this;
    data(param: string): this;
}
declare const Z: zQuery;
declare const tag2: zQueryIntance;
