interface ZaxiosError<ResponseData> {
  response?: ZaxiosResponse<ResponseData>;
}

interface ZaxiosResponse<ResponseData> {
  data: ResponseData;
}
interface Zaxios {
  get<ResponseData>(url: string): ZaxiosResponse<ResponseData>;
  post<ResponseData>(
    url: string,
    requestData: unknown
  ): ZaxiosResponse<ResponseData>;
  isAxiosError<ResponseData>(
    error: unknown
  ): error is ZaxiosError<ResponseData>;
  create(): Zaxios;
}
declare const zaxios: Zaxios;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

(async () => {
  try {
    const res = await zaxios.get<Post>("https://jspost.typicode.com/posts/1");
    console.log(res.data.userId);

    const res2 = await zaxios.post<Post>("https://jspost.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    });
    console.log(res2.data.id);
  } catch (error) {
    if (zaxios.isAxiosError<{ message: string }>(error)) {
      console.log(error.response?.data.message);
    }
  }
})();

new zaxios().get("www.gilbut.co.kr");

zaxios({ url: "www.gilbut.co.kr", method: "get" });

zaxios.create().get("www.gilbut.co.kr");
