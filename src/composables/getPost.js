import { ref } from "vue";
import { db } from "../firebase/config";

const getPost = () => {
  const post = ref(null);
  const error = ref(null);

  const load = async (id) => {
    try {
      const response = await db.collection("posts").doc(id).get();

      if (!response.exists) {
        throw Error("No data available");
      }
      post.value = { ...response.data(), id: response.id };
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
    }
  };

  return { post, error, load };
};

export default getPost;
