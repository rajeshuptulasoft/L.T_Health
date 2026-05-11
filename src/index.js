import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Physiotheraphy } from './pages/Physiotheraphy';
import { HomeNursing } from './pages/HomeNursing';
import { OldAgeCare } from './pages/OldAgeCare';    
import { BabyCareAttendant } from './pages/BabyCareAttendant';
import { HomeICUSupport } from './pages/HomeICUSupport';
import { HomePatientCareAttendant } from './pages/HomePatientCareAttendant';
import { HomeTechnicianSupport } from './pages/HomeTechnicianSupport';
import { HomeDoctorVisit } from './pages/HomeDoctorVisit';
import { HomeMedicineDelivery } from './pages/HomeMedicineDelivery';
import { Doctor } from './pages/Doctor';
import { About } from './pages/About';
import { ContactUs } from './pages/ContactUs';
import { HomeBedsoreCare } from './pages/HomeBedsoreCare';
import { HomeWoundCare } from './pages/HomeWoundCare';
import { Hospital } from './pages/Hospital';
import { Diagnostic } from './pages/Diagnostic';
import { Doctor_joinUs } from './pages/Doctor_joinUs';
import { JoinDoctor } from './pages/JoinDoctor';
import { Franchaise } from './pages/Franchaise';
import { Careers } from './pages/Careers';
import { General_Ipd } from './pages/General_Ipd';
import { NeuroIpd } from './pages/NeuroIpd';
import { OrthoIpd } from './pages/OrthoIpd';
import { Opd } from './pages/Opd';
import { OpdPharmacy } from './pages/OpdPharmacy';
import { PharmacyIpd } from './pages/PharmacyIpd';
import { Panchakarma } from './pages/Panchakarma';
import { OskyMemberShip } from './pages/OskyMemberShip';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/physiotherapy" element={<Physiotheraphy />} />
        <Route path="/home-nursing" element={<HomeNursing />} />
        <Route path="/old-age-care" element={<OldAgeCare />} />
        <Route path="/baby-care-attendant" element={<BabyCareAttendant />} />
        <Route path="/home-icu-setup" element={<HomeICUSupport />} />
        <Route path="/home-patient-care-attendant" element={<HomePatientCareAttendant />} />
        <Route path="/home-technician-support" element={<HomeTechnicianSupport />} />
        <Route path="/home-doctor-visit" element={<HomeDoctorVisit />} />
        <Route path="/home-medicine-delivery" element={<HomeMedicineDelivery />} />
        <Route path="/home-medicine-deliveries" element={<HomeMedicineDelivery />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/home-bedsore-care" element={<HomeBedsoreCare />} />
        <Route path="/home-wound-care" element={<HomeWoundCare />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/diagnostic" element={<Diagnostic />} />
        <Route path="/join-as-a-doctor" element={<JoinDoctor />} />
        <Route path="/doctor-join-us" element={<Doctor_joinUs />} />
        <Route path="/franchaise" element={<Franchaise />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/general-ipd" element={<General_Ipd />} />
        <Route path="/neuro-ipd" element={<NeuroIpd />} />
        <Route path="/ortho-ipd" element={<OrthoIpd />} />
        <Route path="/opd" element={<Opd />} />
        <Route path="/opd-pharmacy" element={<OpdPharmacy />} />
        <Route path="/pharmacy-ipd" element={<PharmacyIpd />} />
        <Route path="/panchakarma" element={<Panchakarma />} />
        <Route path="/osky-membership" element={<OskyMemberShip />} />
        <Route path="/hospital-partner" element={<Hospital />} />
      
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
