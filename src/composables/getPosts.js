import { ref } from "vue";
import { db } from "../firebase/config";

const getPosts = (limit = 10) => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await db.collection("posts").get();

      if (response.empty) {
        throw Error("No data available");
      }
      posts.value = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
    }
  };

  return { posts, error, load };
};

export default getPosts;
