import { useState,useEffect } from "react";
import Navbar from "@/scenes/navbar"
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefit";
import OurClasses from "@/scenes/OurClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { ExerciseType } from "@/shared/types";

function App() {

  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [exercises, setExercises] = useState<ExerciseType>(true);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

//   useEffect(()=>{
//     const getAPIData = async () => {
//         try {
//           const apiResponse = await fetch("https://yoga-api-nzy4.onrender.com/v1/poses?level=intermediate");
//           const json = await apiResponse.json();
//           setExercises(
//             json.poses.map((exercise:any)=>{
//               return{
//               name:exercise.english_name,
//               benefits:exercise.pose_benefits,
//               description:exercise.pose_description,
//               image:exercise.url_png
//             }
//         })
//           )
//           console.log(json);
//         } catch (error) {
//         }
//       };

//       getAPIData()
// },[])




  return (
  <div className="app bg-gray-200">
    <Navbar 
    isTopOfPage={isTopOfPage}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage} />
     <Home setSelectedPage={setSelectedPage} />
     <Benefits setSelectedPage={setSelectedPage} />
     <OurClasses exercises={exercises} setSelectedPage={setSelectedPage} />
     <ContactUs setSelectedPage={setSelectedPage} />
     <Footer/>
  </div>
  )
}

export default App;
