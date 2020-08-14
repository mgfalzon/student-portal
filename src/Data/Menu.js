import {
    FaHome, FaList, FaCheckSquare,
    FaCalendar, FaBriefcase, FaPhone,
    FaBook, FaFile, FaEnvelope
} from 'react-icons/fa'

const data = {
    title: "Menu",
    sections: {
        Main: {
            icons: [FaHome, FaList, FaCheckSquare], 
            links: ["Home", "Syllabus", "Checklist"] 
        },

        Resources: {
            icons: [FaCalendar, FaBriefcase, FaPhone], 
            links: ["Events", "Internships", "Office Contact"] 
        },

        Help: {
            icons: [FaBook, FaFile, FaEnvelope], 
            links: ["Student Handbook", "Helpful Documents", "Email Archive"] 
        }
    }
}

export default data