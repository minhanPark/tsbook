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

Z("p").removeClass("myClass noClass").addClass("yourClass");

Z(["p", "t"]).text("hello");

const tag2 = Z("ul li").addClass(function (index) {
  return "item-" + index;
});

Z(tag2).html(function () {
  console.log(this);
  return Z(this).data("name") + "입니다.";
});
