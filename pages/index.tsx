import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import Sidebar from "../components/Sidebar/Sidebar";
import { app } from "../firebase/config/firebase.config";

const db = getFirestore(app);

const goalsRef = collection(db, "goals");

let gls = new Array();

const Home: NextPage = () => {
  const [goals, setGoals] = useState({
    daysFor: 14,
    description: "Trying out new technologies to build a diary/goal app",
    id: "9Afl1G8czAc6Mr80LHuC",
    title: "Making a Diary/Goal Application",
    notes: [
      {
        day: 1,
        note: "setting and learning firebase as I go",
      },
      {
        day: 2,
        note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium dolor modi nam?",
      },
      {
        day: 3,
        note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, quo!",
      },
      {
        day: 4,
        note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa incidunt ex quod tempore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, ipsum? deleniti molestias. Doloribus enim modi iure ea quaerat nesciunt sunt rem perspiciatis quibusdam autem quod, fuga distinctio quas dolorem quisquam. Ullam reprehenderit omnis minima saepe quo laborum quia veniam expedita, sequi architecto optio alias quisquam quod delectus!",
      },
    ],
  });

  // useEffect(() => {
  //   onSnapshot(goalsRef, (snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       setGoals({ ...doc.data(), id: doc.id });
  //     });
  //   });
  //   console.log(goals);
  // }, [setGoals]);
  // console.log(goals);

  if (!goals) {
    return <div>loading...</div>;
  }
  return (
    <>
      <Sidebar />

      <div className="flex flex-col w-full overflow-y-auto p-4 ">
        <span className="text-white text-4xl font-bold">{goals.title}</span>
        <span className="text-white text-2xl font-light">
          {goals.description}
        </span>

        <div className="flex flex-col mt-4 items-center">
          <span className="text-white text-3xl font-medium">Journey Notes</span>
        </div>

        <Carousel notes={goals.notes} />
      </div>
    </>
  );
};

export default Home;
