import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

(async () => {
  try {
    const res = await axios.get<Post>("https://jspost.typicode.com/posts/1");
    console.log(res.data.userId);

    const res2 = await axios.post<Post>("https://jspost.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    });
    console.log(res2.data.id);
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      console.log(error.response?.data.message);
    }
  }
})();
