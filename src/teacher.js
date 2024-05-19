const teacherObj = [
  {
    personalInformation: {
      fullName: "Fatima Khan",
      dateOfBirth: "1975-09-22",
      cnic: "38201829282728289",
      gender: "Female",
      contactInformation: {
        phoneNumber: "+923001234567",
        email: "fatimakhan@example.com",
      },
      address: "456 University Road, Lahore, Pakistan",
      imgUrl: "https://example.com/fatimakhan.jpg",
    },
    educationalBackground: [
      {
        degreeName: "Ph.D.",
        fieldOfStudy: "Electrical Engineering",
        institutionName: "Lahore University of Management Sciences (LUMS)",
        yearOfStart: 2000,
        yearOfGraduation: 2005,
      },
      {
        degreeName: "M.Sc.",
        fieldOfStudy: "Electrical Engineering",
        institutionName:
          "National University of Sciences and Technology (NUST)",
        yearOfStart: 1996,
        yearOfGraduation: 1998,
      },
    ],
    employmentInformation: [
      {
        position: "Professor",
        department: "Electrical Engineering",
        faculty: "Faculty of Engineering",
        institutionName: "Lahore University of Management Sciences (LUMS)",
        officeLocation: "Engineering Building, Room 300",
        employmentStartDate: "2010-07-01",
        employmentStatus: "Full-time",
      },
      {
        position: "Assistant Professor",
        department: "Electrical Engineering",
        faculty: "Faculty of Engineering",
        institutionName:
          "National University of Sciences and Technology (NUST)",
        officeLocation: "Engineering Building, Room 150",
        employmentStartDate: "2006-09-01",
        employmentStatus: "Full-time",
      },
      {
        position: "Lecturer",
        department: "Electrical Engineering",
        faculty: "Faculty of Engineering",
        institutionName: "COMSATS Institute of Information Technology",
        officeLocation: "Engineering Building, Room 100",
        employmentStartDate: "2001-02-01",
        employmentStatus: "Full-time",
      },
    ],
    teachingAssignments: [
      {
        courseName: "Power Systems",
        courseCode: "EE420",
        classSchedule: "Monday, Wednesday, Friday 11:00 AM - 12:30 PM",
        classLocation: "Room 302, Engineering Building",
        officeHours: "Tuesday 1:00 PM - 3:00 PM",
      },
      {
        courseName: "Electromagnetic Theory",
        courseCode: "EE301",
        classSchedule: "Tuesday, Thursday 9:00 AM - 10:30 AM",
        classLocation: "Room 202, Engineering Building",
        officeHours: "Thursday 11:00 AM - 12:00 PM",
      },
    ],
    researchAndPublications: {
      researchInterests: ["Renewable Energy", "Power Systems"],
      publications: [
        {
          title: "Advances in Power System Stability Analysis",
          type: "Journal Article",
          authors: ["Fatima Khan", "Ali Raza"],
          publicationDate: "2019",
          journal: "IEEE Transactions on Power Systems",
          volume: "24",
          issue: "2",
          pages: "123-135",
        },
      ],
      researchGrants: [
        {
          title: "Grant for Renewable Energy Research",
          fundingAgency: "Pakistan Science Foundation",
          grantAmount: "$50,000",
          duration: "1 year",
        },
      ],
    },
    professionalMembershipsAndCertifications: {
      memberships: [
        "Institute of Electrical and Electronics Engineers (IEEE)",
        "Pakistan Engineering Council (PEC)",
      ],
      certifications: [
        "Certified Energy Manager (CEM)",
        "Certified Power System Operator (CPSO)",
      ],
    },
    administrativeDuties: {
      committees: [
        "Faculty Research Committee",
        "Departmental Curriculum Committee",
      ],
      academicAdvising: [
        "Advisor for Graduate Electrical Engineering Students",
      ],
    },
    additionalInformation: {
      languagesSpoken: ["English", "Urdu"],
      awardsAndHonors: ["Best Research Paper Award (2017)"],
    },
  },
  {
    personalInformation: {
      fullName: "Muhammad Ali",
      cnic: "23423233232332",
      dateOfBirth: "1975-08-20",
      gender: "Male",
      contactInformation: {
        phoneNumber: "+923001234567",
        email: "muhammad.ali@example.com",
      },
      address: "456 University Road, Islamabad, Pakistan",
      imgUrl: "https://example.com/muhammad_ali.jpg",
    },
    educationalBackground: [
      {
        degreeName: "Ph.D.",
        fieldOfStudy: "Computer Science",
        institutionName: "Quaid-i-Azam University",
        yearOfStart: 2002,
        yearOfGraduation: 2006,
      },
      {
        degreeName: "MSc",
        fieldOfStudy: "Computer Science",
        institutionName: "National University of Sciences and Technology",
        yearOfStart: 1998,
        yearOfGraduation: 2000,
      },
      {
        degreeName: "BSc",
        fieldOfStudy: "Computer Science",
        institutionName: "University of Engineering and Technology, Taxila",
        yearOfStart: 1994,
        yearOfGraduation: 1998,
      },
    ],
    employmentInformation: [
      {
        position: "Associate Professor",
        department: "Computer Science",
        faculty: "Faculty of Engineering",
        institutionName: "Quaid-i-Azam University",
        officeLocation: "Computer Science Department, Room 220",
        employmentStartDate: "2008-09-01",
        employmentEndDate: "2022-08-31",
        employmentStatus: "Full-time",
      },
      {
        position: "Assistant Professor",
        department: "Computer Science",
        faculty: "Faculty of Engineering",
        institutionName: "National University of Sciences and Technology",
        officeLocation: "Computer Science Department, Room 105",
        employmentStartDate: "2006-09-01",
        employmentEndDate: "2008-08-31",
        employmentStatus: "Full-time",
      },
    ],
    currentEmploymentInformation: {
      position: "Professor",
      department: "Computer Science",
      faculty: "Faculty of Engineering",
      institutionName: "Quaid-i-Azam University",
      officeLocation: "Computer Science Department, Room 320",
      employmentStartDate: "2022-09-01",
      employmentStatus: "Full-time",
    },
    teachingAssignments: [
      {
        courseName: "Introduction to Computer Science",
        courseCode: "CS101",
        classSchedule: "Monday, Wednesday, Friday 9:00 AM - 10:00 AM",
        classLocation: "Room 101, Engineering Building",
        officeHours: "Tuesday 2:00 PM - 4:00 PM",
      },
      {
        courseName: "Advanced Algorithms",
        courseCode: "CS450",
        classSchedule: "Tuesday, Thursday 11:00 AM - 12:30 PM",
        classLocation: "Room 202, Engineering Building",
        officeHours: "Thursday 2:00 PM - 3:30 PM",
      },
    ],
    researchAndPublications: {
      researchInterests: ["Algorithms", "Machine Learning"],
      publications: [
        {
          title: "Introduction to Algorithms",
          type: "Book",
          authors: ["Muhammad Ali", "Fatima Khan"],
          publicationDate: "2020",
          publisher: "Pakistani Publishers",
        },
        {
          title: "A Study on Machine Learning Techniques",
          type: "Journal Article",
          authors: ["Muhammad Ali", "Ali Khan"],
          publicationDate: "2019",
          journal: "Journal of Pakistani Science",
          volume: "10",
          issue: "2",
          pages: "100-115",
        },
      ],
      researchGrants: [
        {
          title: "Research Grant for Algorithm Development",
          fundingAgency: "Pakistan Science Foundation",
          grantAmount: "PKR 500,000",
          duration: "2 years",
        },
      ],
    },
    professionalMembershipsAndCertifications: {
      memberships: [
        "Pakistan Computer Society",
        "Institute of Electrical and Electronics Engineers (IEEE) Pakistan",
      ],
      certifications: [
        "Certified Information Systems Security Professional (CISSP)",
      ],
    },
    administrativeDuties: {
      committees: [
        "Faculty Curriculum Committee",
        "Departmental Hiring Committee",
      ],
      academicAdvising: ["Advisor for Undergraduate Computer Science Students"],
    },
    additionalInformation: {
      languagesSpoken: ["English", "Urdu"],
      awardsAndHonors: ["Best Teacher Award (2020)"],
    },
  },
  {
    personalInformation: {
      fullName: "Ali Hassan",
      dateOfBirth: "1982-11-10",
      cnic: "38201829282728289",
      gender: "Male",
      contactInformation: {
        phoneNumber: "+923331234567",
        email: "alihassan@example.com",
      },
      address: "789 University Road, Islamabad, Pakistan",
      imgUrl: "https://example.com/alihassan.jpg",
    },
    educationalBackground: [
      {
        degreeName: "Ph.D.",
        fieldOfStudy: "Civil Engineering",
        institutionName:
          "University of Engineering and Technology (UET), Lahore",
        yearOfStart: 2005,
        yearOfGraduation: 2010,
      },
      {
        degreeName: "M.Sc.",
        fieldOfStudy: "Structural Engineering",
        institutionName:
          "National University of Sciences and Technology (NUST), Islamabad",
        yearOfStart: 2001,
        yearOfGraduation: 2003,
      },
    ],
    employmentInformation: [
      {
        position: "Professor",
        department: "Civil Engineering",
        faculty: "Faculty of Engineering",
        institutionName:
          "University of Engineering and Technology (UET), Taxila",
        officeLocation: "Engineering Building, Room 400",
        employmentStartDate: "2015-08-01",
        employmentStatus: "Full-time",
      },
      {
        position: "Assistant Professor",
        department: "Civil Engineering",
        faculty: "Faculty of Engineering",
        institutionName:
          "National University of Sciences and Technology (NUST), Islamabad",
        officeLocation: "Engineering Building, Room 250",
        employmentStartDate: "2010-09-01",
        employmentStatus: "Full-time",
      },
    ],
    teachingAssignments: [
      {
        courseName: "Structural Analysis",
        courseCode: "CE301",
        classSchedule: "Monday, Wednesday, Friday 9:00 AM - 10:30 AM",
        classLocation: "Room 202, Engineering Building",
        officeHours: "Tuesday 10:00 AM - 12:00 PM",
      },
      {
        courseName: "Concrete Technology",
        courseCode: "CE401",
        classSchedule: "Tuesday, Thursday 1:00 PM - 2:30 PM",
        classLocation: "Room 302, Engineering Building",
        officeHours: "Thursday 3:00 PM - 4:00 PM",
      },
    ],
    researchAndPublications: {
      researchInterests: ["Structural Engineering", "Concrete Technology"],
      publications: [
        {
          title: "Design of Reinforced Concrete Structures",
          type: "Book",
          authors: ["Ali Hassan", "Sana Khan"],
          publicationDate: "2020",
          publisher: "Springer",
        },
        {
          title: "Experimental Investigation of High-Performance Concrete",
          type: "Journal Article",
          authors: ["Ali Hassan", "Imran Ahmed"],
          publicationDate: "2018",
          journal: "Journal of Structural Engineering",
          volume: "20",
          issue: "4",
          pages: "345-360",
        },
      ],
      researchGrants: [
        {
          title: "Grant for Seismic Retrofitting Research",
          fundingAgency: "Higher Education Commission (HEC) of Pakistan",
          grantAmount: "$80,000",
          duration: "2 years",
        },
      ],
    },
    professionalMembershipsAndCertifications: {
      memberships: [
        "American Society of Civil Engineers (ASCE)",
        "Pakistan Engineering Council (PEC)",
      ],
      certifications: [
        "Licensed Structural Engineer (LSE)",
        "Certified Construction Manager (CCM)",
      ],
    },
    administrativeDuties: {
      committees: [
        "Faculty Quality Assurance Committee",
        "University Research Ethics Committee",
      ],
      academicAdvising: [
        "Advisor for Postgraduate Structural Engineering Students",
      ],
    },
    additionalInformation: {
      languagesSpoken: ["English", "Urdu"],
      awardsAndHonors: ["Best Teacher Award (2019)"],
    },
  },
  {
    personalInformation: {
      fullName: "Sana Ahmed",
      dateOfBirth: "1975-09-20",
      cnic: "38201829282728289",
      gender: "Female",
      contactInformation: {
        phoneNumber: "+923001234567",
        email: "sanaahmed@example.com",
      },
      address: "456 Street, Lahore, Pakistan",
      imgUrl: "https://example.com/sanaahmed.jpg",
    },
    educationalBackground: [
      {
        degreeName: "Ph.D.",
        fieldOfStudy: "Electrical Engineering",
        institutionName: "Lahore University of Management Sciences (LUMS)",
        yearOfStart: 2003,
        yearOfGraduation: 2007,
      },
      {
        degreeName: "M.Sc.",
        fieldOfStudy: "Electrical Engineering",
        institutionName:
          "National University of Sciences and Technology (NUST), Islamabad",
        yearOfStart: 1998,
        yearOfGraduation: 2000,
      },
    ],
    employmentInformation: [
      {
        position: "Professor",
        department: "Electrical Engineering",
        faculty: "Faculty of Engineering",
        institutionName: "Lahore University of Management Sciences (LUMS)",
        officeLocation: "Engineering Building, Room 500",
        employmentStartDate: "2012-10-01",
        employmentStatus: "Full-time",
      },
      {
        position: "Assistant Professor",
        department: "Electrical Engineering",
        faculty: "Faculty of Engineering",
        institutionName:
          "National University of Sciences and Technology (NUST), Islamabad",
        officeLocation: "Engineering Building, Room 350",
        employmentStartDate: "2007-09-01",
        employmentStatus: "Full-time",
      },
    ],
    teachingAssignments: [
      {
        courseName: "Power Systems Analysis",
        courseCode: "EE401",
        classSchedule: "Monday, Wednesday, Friday 8:00 AM - 9:30 AM",
        classLocation: "Room 302, Engineering Building",
        officeHours: "Wednesday 10:00 AM - 12:00 PM",
      },
      {
        courseName: "Renewable Energy Systems",
        courseCode: "EE501",
        classSchedule: "Tuesday, Thursday 10:00 AM - 11:30 AM",
        classLocation: "Room 401, Engineering Building",
        officeHours: "Monday 1:00 PM - 3:00 PM",
      },
    ],
    researchAndPublications: {
      researchInterests: ["Power Systems", "Renewable Energy"],
      publications: [
        {
          title: "Analysis of Smart Grid Technologies",
          type: "Book",
          authors: ["Sana Ahmed", "Ali Khan"],
          publicationDate: "2019",
          publisher: "IEEE Press",
        },
        {
          title: "Impact of Distributed Generation on Power Quality",
          type: "Journal Article",
          authors: ["Sana Ahmed"],
          publicationDate: "2017",
          journal: "IEEE Transactions on Power Systems",
          volume: "25",
          issue: "2",
          pages: "1150-1165",
        },
      ],
      researchGrants: [
        {
          title: "Research Grant for Solar Energy Integration",
          fundingAgency: "Pakistan Science Foundation",
          grantAmount: "$120,000",
          duration: "3 years",
        },
      ],
    },
    professionalMembershipsAndCertifications: {
      memberships: [
        "IEEE Power and Energy Society",
        "Pakistan Engineering Council (PEC)",
      ],
      certifications: [
        "Certified Energy Manager (CEM)",
        "Licensed Professional Engineer (PE)",
      ],
    },
    administrativeDuties: {
      committees: [
        "University Research Committee",
        "Faculty Curriculum Committee",
      ],
      academicAdvising: [
        "Advisor for Postgraduate Electrical Engineering Students",
      ],
    },
    additionalInformation: {
      languagesSpoken: ["English", "Urdu"],
      awardsAndHonors: ["Best Researcher Award (2016)"],
    },
  },
  {
    personalInformation: {
      fullName: "Hassan Ali",
      dateOfBirth: "1987-03-12",
      cnic: "38201829282728289",
      gender: "Male",
      contactInformation: {
        phoneNumber: "+923041234567",
        email: "hassanali@example.com",
      },
      address: "321 Avenue, Karachi, Pakistan",
      imgUrl: "https://example.com/hassanali.jpg",
    },
    educationalBackground: [
      {
        degreeName: "Ph.D.",
        fieldOfStudy: "Mechanical Engineering",
        institutionName:
          "Pakistan Institute of Engineering and Applied Sciences (PIEAS), Islamabad",
        yearOfStart: 2009,
        yearOfGraduation: 2013,
      },
      {
        degreeName: "M.Sc.",
        fieldOfStudy: "Mechanical Engineering",
        institutionName:
          "University of Engineering and Technology (UET), Lahore",
        yearOfStart: 2004,
        yearOfGraduation: 2006,
      },
    ],
    employmentInformation: [
      {
        position: "Professor",
        department: "Mechanical Engineering",
        faculty: "Faculty of Engineering",
        institutionName:
          "Pakistan Institute of Engineering and Applied Sciences (PIEAS), Islamabad",
        officeLocation: "Engineering Building, Room 600",
        employmentStartDate: "2018-07-01",
        employmentStatus: "Full-time",
      },
      {
        position: "Assistant Professor",
        department: "Mechanical Engineering",
        faculty: "Faculty of Engineering",
        institutionName:
          "National University of Sciences and Technology (NUST), Islamabad",
        officeLocation: "Engineering Building, Room 450",
        employmentStartDate: "2013-09-01",
        employmentStatus: "Full-time",
      },
    ],
    teachingAssignments: [
      {
        courseName: "Thermodynamics",
        courseCode: "ME301",
        classSchedule: "Monday, Wednesday, Friday 11:00 AM - 12:30 PM",
        classLocation: "Room 402, Engineering Building",
        officeHours: "Monday 2:00 PM - 4:00 PM",
      },
      {
        courseName: "Fluid Mechanics",
        courseCode: "ME401",
        classSchedule: "Tuesday, Thursday 9:00 AM - 10:30 AM",
        classLocation: "Room 501, Engineering Building",
        officeHours: "Wednesday 3:00 PM - 4:00 PM",
      },
    ],
    researchAndPublications: {
      researchInterests: ["Thermal Engineering", "Fluid Mechanics"],
      publications: [
        {
          title: "Heat Transfer Enhancement Techniques",
          type: "Book",
          authors: ["Hassan Ali", "Amna Khan"],
          publicationDate: "2021",
          publisher: "Springer",
        },
        {
          title: "Experimental Investigation of Turbulent Flow",
          type: "Journal Article",
          authors: ["Hassan Ali"],
          publicationDate: "2019",
          journal: "International Journal of Heat and Mass Transfer",
          volume: "30",
          issue: "5",
          pages: "765-780",
        },
      ],
      researchGrants: [
        {
          title: "Research Grant for Heat Exchanger Design",
          fundingAgency: "Higher Education Commission (HEC) of Pakistan",
          grantAmount: "$90,000",
          duration: "2 years",
        },
      ],
    },
    professionalMembershipsAndCertifications: {
      memberships: [
        "American Society of Mechanical Engineers (ASME)",
        "Pakistan Engineering Council (PEC)",
      ],
      certifications: [
        "Certified Energy Auditor (CEA)",
        "Licensed Professional Engineer (PE)",
      ],
    },
    administrativeDuties: {
      committees: [
        "University Library Committee",
        "Faculty Research Committee",
      ],
      academicAdvising: [
        "Advisor for Undergraduate Mechanical Engineering Students",
      ],
    },
    additionalInformation: {
      languagesSpoken: ["English", "Urdu"],
      awardsAndHonors: ["Outstanding Researcher Award (2020)"],
    },
  },
  {
    personalInformation: {
      fullName: "Sana Shah",
      dateOfBirth: "1982-06-20",
      cnic: "38201829282728289",
      gender: "Female",
      contactInformation: {
        phoneNumber: "+923041234567",
        email: "sanashah@example.com",
      },
      address: "890 Lane, Islamabad, Pakistan",
      imgUrl: "https://example.com/sanashah.jpg",
    },
    educationalBackground: [
      {
        degreeName: "Ph.D.",
        fieldOfStudy: "Civil Engineering",
        institutionName:
          "National University of Sciences and Technology (NUST), Islamabad",
        yearOfStart: 2004,
        yearOfGraduation: 2009,
      },
      {
        degreeName: "M.Sc.",
        fieldOfStudy: "Civil Engineering",
        institutionName:
          "University of Engineering and Technology (UET), Lahore",
        yearOfStart: 1999,
        yearOfGraduation: 2003,
      },
    ],
    employmentInformation: [
      {
        position: "Professor",
        department: "Civil Engineering",
        faculty: "Faculty of Engineering",
        institutionName:
          "National University of Sciences and Technology (NUST), Islamabad",
        officeLocation: "Engineering Building, Room 900",
        employmentStartDate: "2014-07-01",
        employmentStatus: "Full-time",
      },
      {
        position: "Assistant Professor",
        department: "Civil Engineering",
        faculty: "Faculty of Engineering",
        institutionName:
          "Pakistan Institute of Engineering and Applied Sciences (PIEAS), Islamabad",
        officeLocation: "Engineering Building, Room 750",
        employmentStartDate: "2010-09-01",
        employmentStatus: "Full-time",
      },
    ],
    teachingAssignments: [
      {
        courseName: "Structural Analysis",
        courseCode: "CE301",
        classSchedule: "Monday, Wednesday, Friday 8:00 AM - 9:30 AM",
        classLocation: "Room 502, Engineering Building",
        officeHours: "Wednesday 10:00 AM - 12:00 PM",
      },
      {
        courseName: "Construction Management",
        courseCode: "CE401",
        classSchedule: "Tuesday, Thursday 11:00 AM - 12:30 PM",
        classLocation: "Room 602, Engineering Building",
        officeHours: "Thursday 1:00 PM - 2:00 PM",
      },
    ],
    researchAndPublications: {
      researchInterests: ["Structural Engineering", "Construction Management"],
      publications: [
        {
          title: "Structural Design Handbook",
          type: "Book",
          authors: ["Sana Shah", "Ali Khan"],
          publicationDate: "2016",
          publisher: "McGraw Hill",
        },
        {
          title: "Construction Project Planning",
          type: "Journal Article",
          authors: ["Sana Shah"],
          publicationDate: "2014",
          journal: "Journal of Construction Engineering and Management",
          volume: "30",
          issue: "2",
          pages: "280-295",
        },
      ],
      researchGrants: [
        {
          title: "Research Grant for Sustainable Infrastructure",
          fundingAgency: "Higher Education Commission (HEC) of Pakistan",
          grantAmount: "$150,000",
          duration: "4 years",
        },
      ],
    },
    professionalMembershipsAndCertifications: {
      memberships: [
        "American Society of Civil Engineers (ASCE)",
        "Pakistan Engineering Council (PEC)",
      ],
      certifications: [
        "Certified Construction Manager (CCM)",
        "Licensed Professional Engineer (PE)",
      ],
    },
    administrativeDuties: {
      committees: [
        "University Research Ethics Committee",
        "Faculty Board of Studies",
      ],
      academicAdvising: [
        "Advisor for Undergraduate Civil Engineering Students",
      ],
    },
    additionalInformation: {
      languagesSpoken: ["English", "Urdu"],
      awardsAndHonors: ["Best Researcher Award (2018)"],
    },
  },
];

export default teacherObj;
