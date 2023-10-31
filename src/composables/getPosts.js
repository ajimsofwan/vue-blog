import { ref } from "vue";

const getPosts = (limit = 10) => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/posts?limit=" + limit
      );

      if (!response.ok) {
        throw Error("No data available");
      }
      const data = await response.json();
      posts.value = data.posts;
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
    }
  };

  return { posts, error, load };
};

export default getPosts;
