import { ref } from "vue";

const getPost = () => {
  const post = ref(null);
  const error = ref(null);

  const load = async (id) => {
    try {
      const response = await fetch("https://dummyjson.com/posts/" + id);

      if (!response.ok) {
        throw Error("That post does not exist");
      }
      post.value = await response.json();
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
    }
  };

  return { post, error, load };
};

export default getPost;
