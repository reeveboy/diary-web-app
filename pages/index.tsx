import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Item from "../components/Sidebar/Item";
import Sidebar from "../components/Sidebar/Sidebar";
import { app } from "../firebase/config/firebase.config";

const db = getFirestore(app);

const goalsRef = collection(db, "goals");

let gls = new Array();
let goal: any = null;
onSnapshot(goalsRef, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    gls.push({ ...doc.data(), id: doc.id });
    goal = { ...doc.data(), id: doc.id };
  });
});

const Home: NextPage = () => {
  const [goals, setGoals] = useState(null);

  useEffect(() => {
    setGoals(gls[0]);
  }, [goals, setGoals]);
  console.log(goal);

  return (
    <>
      <Sidebar />

      <div className="flex flex-col w-full overflow-y-auto p-4 bg-gradient-to-br from-[#D0F9FF] to-[#8BFFEC]">
        <span className="text-[40px] font-bold">{goal.title}</span>
        <span className="text-[24px]">{goal.description}</span>

        <div className="flex flex-col mt-4 items-center">
          <span className="text-[35px] font-semibold">Journey Notes</span>
        </div>
      </div>
    </>
  );
};

export default Home;
