import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import type { NextPage } from "next";
import { app } from "../firebase/config/firebase.config";

const db = getFirestore(app);

const goalsRef = collection(db, "goals");

onSnapshot(goalsRef, (snapshot) => {
  let goals: { id: string }[] = [];
  snapshot.docs.forEach((doc) => {
    goals.push({ ...doc.data(), id: doc.id });
  });
  console.log(goals);
});

const Home: NextPage = () => {
  return <div>Hello</div>;
};

export default Home;
