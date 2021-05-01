import * as React from 'react'
import ColumnContainer from "../components/ColumnContainer/ColumnContainer";
import Sidebar from "../components/Sidebar/Sidebar"
import { useUser } from "../contexts/UserProvider";
import Modal from '../components/Modal/Modal'
import { Dialog } from "@headlessui/react";
import { UserContextType, Appointment, FollowUp, Prescription } from "../interfaces/Interface";
import axios from 'axios';
import { getPatientAppt } from '../services/appointmentService'
import PatientContainer from '../components/PatientContainer/PatientContainer'

const Home = () => {
  const { userDetails}: UserContextType = useUser();
  const [appointments, setAppointments] = React.useState<Appointment[]>([]);
  const [followUps, setFollowUps] = React.useState<FollowUp[]>([]);
  const [prescription, setPrescription] = React.useState<Prescription[]>([]);
  
  // fetch appointments on load
  React.useEffect(() => {
    const getAppointments = async () => {
      const res = await getPatientAppt(userDetails.id);

      setAppointments(res.data);
      console.log(appointments)
    }

    getAppointments();
  }, []);

  console.log(appointments)

  return (
    <main className="flex">
      <Sidebar />

      <div className="bg-gray-100 w-10/12">
        <div className="flex flex-col md:flex-row p-8 justify-around">
          {userDetails.isDoctor ? (
            <>
              {/* <ColumnContainer /> */}
              {/* <DoctorContainer /> */}
            </>
          ) : (
            <>
              <PatientContainer appointments={appointments} followUps={followUps} prescriptions={prescription}/>
              {/* <ColumnContainer />
              <ColumnContainer /> */}
            </>
          )}
        </div>
      </div>


    </main>
  );
};

export default Home;
