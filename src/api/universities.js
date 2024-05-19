const universtyList = [
  {
    name: "University of Engineering and Technology (UET)",
    main_campus_location: "Lahore",
    sub_campuses: ["Taxila", "Gujranwala"],
  },
  {
    name: "Fatima Jinnah Women University",
    main_campus_location: "Rawalpindi",
    sub_campuses: ["Sialkot"],
  },
  {
    name: "Shaheed Benazir Bhutto University",
    main_campus_location: "Shaheed Benazirabad",
    sub_campuses: ["Larkana", "Mirpurkhas", "Dadu"],
  },
  {
    name: "Bacha Khan University",
    main_campus_location: "Charsadda",
    sub_campuses: ["Sheringal"],
  },
  {
    name: "Government College University",
    main_campus_location: "Lahore",
    sub_campuses: ["Faisalabad"],
  },
  {
    name: "Shaheed Benazir Bhutto University",
    main_campus_location: "Shaheed Benazirabad",
    sub_campuses: ["Larkana", "Mirpurkhas", "Dadu"],
  },
  {
    name: "Quaid-e-Awam University of Engineering, Science, and Technology",
    main_campus_location: "Nawabshah",
    sub_campuses: [],
  },
  {
    name: "University of Agriculture",
    main_campus_location: "Faisalabad",
    sub_campuses: [],
  },
  {
    name: "Government College University",
    main_campus_location: "Lahore",
    sub_campuses: ["Faisalabad"],
  },
  {
    name: "Shaheed Mohtarma Benazir Bhutto Medical University",
    main_campus_location: "Larkana",
    sub_campuses: [],
  },
  {
    name: "Bacha Khan University",
    main_campus_location: "Charsadda",
    sub_campuses: ["Sheringal"],
  },
  {
    name: "Government College Women University",
    main_campus_location: "Sialkot",
    sub_campuses: [],
  },
  {
    name: "University of the Punjab",
    main_campus_location: "Lahore",
    sub_campuses: [],
  },
  {
    name: "National University of Sciences and Technology (NUST)",
    main_campus_location: "Islamabad",
    sub_campuses: [],
  },
  {
    name: "University of Karachi",
    main_campus_location: "Karachi",
    sub_campuses: [],
  },
  {
    name: "Aga Khan University",
    main_campus_location: "Karachi",
    sub_campuses: [],
  },
  {
    name: "Lahore University of Management Sciences (LUMS)",
    main_campus_location: "Lahore",
    sub_campuses: [],
  },
  {
    name: "Pakistan Institute of Engineering and Applied Sciences (PIEAS)",
    main_campus_location: "Islamabad",
    sub_campuses: [],
  },
  {
    name: "COMSATS University Islamabad (CUI)",
    main_campus_location: "Islamabad",
    sub_campuses: [],
  },
  {
    name: "University of Peshawar",
    main_campus_location: "Peshawar",
    sub_campuses: [],
  },
  {
    name: "Karachi University Business School",
    main_campus_location: "Karachi",
    sub_campuses: [],
  },
  {
    name: "University of Veterinary and Animal Sciences",
    main_campus_location: "Lahore",
    sub_campuses: [],
  },
  {
    name: "International Islamic University",
    main_campus_location: "Islamabad",
    sub_campuses: [],
  },
  {
    name: "Allama Iqbal Open University",
    main_campus_location: "Islamabad",
    sub_campuses: [],
  },
  {
    name: "University of Agriculture",
    main_campus_location: "Faisalabad",
    sub_campuses: [],
  },
  {
    name: "Institute of Business Administration (IBA)",
    main_campus_location: "Karachi",
    sub_campuses: [],
  },
  {
    name: "Bahauddin Zakariya University",
    main_campus_location: "Multan",
    sub_campuses: [],
  },
  {
    name: "Virtual University of Pakistan",
    main_campus_location: "Lahore",
    sub_campuses: [],
  },
  {
    name: "NED University of Engineering and Technology",
    main_campus_location: "Karachi",
    sub_campuses: [],
  },
  {
    name: "University of Balochistan",
    main_campus_location: "Quetta",
    sub_campuses: [],
  },
  {
    name: "Shaheed Zulfiqar Ali Bhutto Medical University",
    main_campus_location: "Islamabad",
    sub_campuses: [],
  },
  {
    name: "University of Sargodha",
    main_campus_location: "Sargodha",
    sub_campuses: [],
  },
  {
    name: "National University of Modern Languages",
    main_campus_location: "Islamabad",
    sub_campuses: [],
  },
  {
    name: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
    main_campus_location: "Topi",
    sub_campuses: [],
  },
  {
    name: "Quaid-e-Awam University of Engineering, Science, and Technology",
    main_campus_location: "Nawabshah",
    sub_campuses: [],
  },
  {
    name: "University of Malakand",
    main_campus_location: "Chakdara",
    sub_campuses: [],
  },
  {
    name: "University of Azad Jammu and Kashmir",
    main_campus_location: "Muzaffarabad",
    sub_campuses: [],
  },
  {
    name: "University of Gujrat",
    main_campus_location: "Gujrat",
    sub_campuses: [],
  },
  {
    name: "Lahore College for Women University",
    main_campus_location: "Lahore",
    sub_campuses: [],
  },
  {
    name: "University of Science and Technology",
    main_campus_location: "Bannu",
    sub_campuses: [],
  },
  {
    name: "University of Management and Technology",
    main_campus_location: "Lahore",
    sub_campuses: [],
  },
  {
    name: "Khyber Medical University",
    main_campus_location: "Peshawar",
    sub_campuses: [],
  },
  {
    name: "Government College Women University",
    main_campus_location: "Sialkot",
    sub_campuses: [],
  },
  {
    name: "Shaheed Mohtarma Benazir Bhutto Medical University",
    main_campus_location: "Larkana",
    sub_campuses: [],
  },
  {
    name: "Bacha Khan University",
    main_campus_location: "Charsadda",
    sub_campuses: [],
  },
  {
    name: "University of Education",
    main_campus_location: "Lahore",
    sub_campuses: [],
  },
  {
    name: "Gomal University",
    main_campus_location: "Dera Ismail Khan",
    sub_campuses: [],
  },
  {
    name: "Pakistan Military Academy",
    main_campus_location: "Kakul",
    sub_campuses: [],
  },
  {
    name: "Hazara University",
    main_campus_location: "Dodhial",
    sub_campuses: [],
  },
  {
    name: "University of Swat",
    main_campus_location: "Swat",
    sub_campuses: [],
  },
  {
    name: "Mirpur University of Science and Technology",
    main_campus_location: "Mirpur",
    sub_campuses: [],
  },
  {
    name: "Islamia College University",
    main_campus_location: "Peshawar",
    sub_campuses: [],
  },
  {
    name: "Abdul Wali Khan University",
    main_campus_location: "Mardan",
    sub_campuses: [],
  },
  {
    name: "Lasbela University of Agriculture, Water, and Marine Sciences",
    main_campus_location: "Lasbela",
    sub_campuses: [],
  },
  {
    name: "University of Turbat",
    main_campus_location: "Turbat",
    sub_campuses: [],
  },
];
export default universtyList;
