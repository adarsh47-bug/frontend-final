// import React, { useState, useEffect, useContext } from 'react';
// // import axios from 'axios';
// import { AuthContext } from '../context/authContext';
// import { Link } from 'react-router-dom';

// const ProfileSection = ({ id, title, content, isList = false, itemFormat }) => (
//   <article id={id} className="w-full rounded-xl border border-gray-700 bg-[#fff2f238] text-black p-6 shadow-lg">
//     <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>
//     {isList ? (
//       content.length > 0 ? (
//         <ul className="list-disc list-inside text-black">
//           {content.map((item, index) => (
//             <li key={index}>{itemFormat ? itemFormat(item) : item}</li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-black">No {title.toLowerCase()} listed.</p>
//       )
//     ) : (
//       content.map(({ label, value }, index) => (
//         <p key={index} className="text-black">
//           <strong>{label}:</strong> {value}
//         </p>
//       ))
//     )}
//   </article>
// );

// const Sidebar = ({ profile }) => (
//   <aside className="h-[80vh] w-[25%] rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg">
//     <div className="flex items-center gap-4">
//       <img
//         alt="User Avatar"
//         src={profile.avatarUrl || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1725699415~exp=1725700015~hmac=04febfd8848c29e1fd50fe7f67686ef34ea6bf5b89e8a9d2a8ce02688f1173"}
//         className="size-16 rounded-full object-cover w-16 h-16"
//       />
//       <div className='w-[75%]'>
//         <h3 className="text-lg font-medium text-white">{profile.name}</h3>
//         <p className="mt-1 text-xs font-medium text-gray-300">
//           {profile.type} | {profile.universityName}
//         </p>
//       </div>
//     </div>
//     <ul className="mt-4 space-y-2">
//       {['Basic Details', 'Education', 'Experience', 'Skills', 'Projects', 'Certifications'].map((label) => (
//         <li key={label}>
//           <a href={`#${label.toLowerCase().replace(' ', '-')}`} className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
//             <strong className="font-medium text-white">{label}</strong>
//           </a>
//         </li>
//       ))}
//       <li>
//         <Link to="/settings" className="block h-full rounded-lg my-1 border border-gray-700 p-4 hover:border-pink-600">
//           <strong className="font-medium text-white">Profile Settings</strong>
//         </Link>
//       </li>
//     </ul>
//   </aside>
// );

// const ProfilePage = () => {
//   const [profile, setProfile] = useState(
//     {
//       name: 'Adarsh Kadam',
//       email: 'adarsh.kadam@example.com',
//       contactNumber: '+91 9876543210',
//       bio: 'MERN Stack Developer with a passion for building efficient web applications.',
//       type: 'Alumnus',
//       universityName: 'XYZ University',
//       createdAt: '2020-09-15T12:00:00Z',
//       updatedAt: '2024-09-07T08:30:00Z',

//       education: [
//         { degree: 'Bachelor of Technology', institution: 'XYZ University' },
//         { degree: 'Master of Science', institution: 'ABC Institute of Technology' }
//       ],

//       experience: [
//         { role: 'Software Developer', company: 'Tech Solutions Pvt. Ltd.' },
//         { role: 'Intern', company: 'Innovative Labs' }
//       ],

//       skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'CSS', 'HTML'],

//       areasOfInterest: ['Web Development', 'Artificial Intelligence', 'Cloud Computing'],

//       projects: [
//         { title: 'Event Planning System', description: 'Full-stack web application for event management.' },
//         { title: 'Fashion Evo', description: 'E-commerce platform for fashion products.' }
//       ],

//       certifications: [
//         { title: 'Certified MERN Developer', organization: 'Udemy' },
//         { title: 'Cloud Practitioner', organization: 'AWS' }
//       ],

//       volunteerExperience: [
//         { role: 'Mentor', organization: 'Tech Thinkers Coding Club' },
//         { role: 'Event Coordinator', organization: 'Open Source Summit' }
//       ],

//       honorsAwards: [
//         { title: 'Best Project Award', description: 'Awarded for the Fashion Evo project in 2023.' },
//         { title: 'Top Coder', description: 'Ranked in the top 5 at a hackathon.' }
//       ],

//       languages: ['English', 'Hindi', 'Marathi'],

//       organizations: [
//         { name: 'XYZ Developers Club', role: 'President' },
//         { name: 'Tech Innovators', role: 'Member' }
//       ]
//     }
//   );
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         // const token = localStorage.getItem('token');
//         // if (!token) throw new Error('No token found');
//         // const config = {
//         //   headers: { Authorization: `Bearer ${token}` },
//         // };
//         // const { data } = await axios.get('/api/users/profile', config);
//         // // console.log('Fetched profile data:', data); // Log fetched data
//         // setProfile(data);
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//       }
//     };

//     fetchProfile();
//   }, [user]);

//   console.log('Profile state:', profile); // Log profile state

//   const sections = [
//     {
//       id: 'basic-details', title: 'Basic Details', content: [
//         { label: 'Name', value: profile.name },
//         { label: 'Email', value: profile.email },
//         { label: 'Contact Number', value: profile.contactNumber },
//         { label: 'Bio', value: profile.bio },
//         { label: 'Type', value: profile.type },
//         { label: 'University', value: profile.universityName },
//         { label: 'Account Created', value: new Date(profile.createdAt).toLocaleDateString() },
//         { label: 'Last Updated', value: new Date(profile.updatedAt).toLocaleDateString() },
//       ]
//     },
//     { id: 'education', title: 'Education', content: profile.education || [], isList: true, itemFormat: edu => `${edu.degree} at ${edu.institution}` },
//     { id: 'experience', title: 'Experience', content: profile.experience || [], isList: true, itemFormat: exp => `${exp.role} at ${exp.company}` },
//     { id: 'skills', title: 'Skills', content: profile.skills || [], isList: true },
//     { id: 'areas-of-interest', title: 'Areas of Interest', content: profile.areasOfInterest || [], isList: true },
//     { id: 'projects', title: 'Projects', content: profile.projects || [], isList: true },
//     { id: 'certifications', title: 'Certifications', content: profile.certifications || [], isList: true },
//     { id: 'volunteer-experience', title: 'Volunteer Experience', content: profile.volunteerExperience || [], isList: true },
//     { id: 'honors-awards', title: 'Honors & Awards', content: profile.honorsAwards || [], isList: true },
//     { id: 'languages', title: 'Languages', content: profile.languages || [], isList: true },
//     { id: 'organizations', title: 'Organizations', content: profile.organizations || [], isList: true, itemFormat: org => `${org.name} - ${org.role}` },
//   ];

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold text-blue-800 mb-6">Your Profile</h1>
//       <div className="flex flex-row container">
//         <Sidebar profile={profile} />
//         <div className="mx-auto ml-6 lg:w-[100%] flex flex-wrap space-y-4">
//           {sections.map(section => (
//             <ProfileSection
//               key={section.id}
//               id={section.id}
//               title={section.title}
//               content={section.content}
//               isList={section.isList}
//               itemFormat={section.itemFormat}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';

const ProfileSection = ({ id, title, content, isList = false, itemFormat }) => (
  <article id={id} className="w-full rounded-xl border border-gray-700 bg-[#fff2f238] text-black p-6 shadow-lg">
    <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>
    {isList ? (
      content.length > 0 ? (
        <ul className="list-disc list-inside text-black">
          {content.map((item, index) => (
            <li key={index}>{itemFormat ? itemFormat(item) : JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p className="text-black">No {title.toLowerCase()} listed.</p>
      )
    ) : (
      content.map(({ label, value }, index) => (
        <p key={index} className="text-black">
          <strong>{label}:</strong> {value}
        </p>
      ))
    )}
  </article>
);

const Sidebar = ({ profile }) => (
  <aside className="h-[80vh] w-[25%] rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg">
    <div className="flex items-center gap-4">
      <img
        alt="User Avatar"
        src={profile.avatarUrl || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1725699415~exp=1725700015~hmac04febfd8848c29e1fd50fe7f67686ef34ea6bf5b89e8a9d2a8ce02688f1173"}
        className="size-16 rounded-full object-cover w-16 h-16"
      />
      <div className='w-[75%]'>
        <h3 className="text-lg font-medium text-white">{profile.name}</h3>
        <p className="mt-1 text-xs font-medium text-gray-300">
          {profile.type} | {profile.universityName}
        </p>
      </div>
    </div>
    <ul className="mt-4 space-y-2">
      {['Basic Details', 'Education', 'Experience', 'Skills', 'Projects', 'Certifications'].map((label) => (
        <li key={label}>
          <a href={`#${label.toLowerCase().replace(' ', '-')}`} className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
            <strong className="font-medium text-white">{label}</strong>
          </a>
        </li>
      ))}
      <li>
        <Link to="/settings" className="block h-full rounded-lg my-1 border border-gray-700 p-4 hover:border-pink-600">
          <strong className="font-medium text-white">Profile Settings</strong>
        </Link>
      </li>
    </ul>
  </aside>
);

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Adarsh Kadam',
    email: 'adarsh.kadam@example.com',
    contactNumber: '+91 9876543210',
    bio: 'MERN Stack Developer with a passion for building efficient web applications.',
    type: 'Alumnus',
    universityName: 'XYZ University',
    createdAt: '2020-09-15T12:00:00Z',
    updatedAt: '2024-09-07T08:30:00Z',
    education: [
      { degree: 'Bachelor of Technology', institution: 'XYZ University' },
      { degree: 'Master of Science', institution: 'ABC Institute of Technology' }
    ],
    experience: [
      { role: 'Software Developer', company: 'Tech Solutions Pvt. Ltd.' },
      { role: 'Intern', company: 'Innovative Labs' }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'CSS', 'HTML'],
    areasOfInterest: ['Web Development', 'Artificial Intelligence', 'Cloud Computing'],
    projects: [
      { title: 'Event Planning System', description: 'Full-stack web application for event management.' },
      { title: 'Fashion Evo', description: 'E-commerce platform for fashion products.' }
    ],
    certifications: [
      { title: 'Certified MERN Developer', organization: 'Udemy' },
      { title: 'Cloud Practitioner', organization: 'AWS' }
    ],
    volunteerExperience: [
      { role: 'Mentor', organization: 'Tech Thinkers Coding Club' },
      { role: 'Event Coordinator', organization: 'Open Source Summit' }
    ],
    honorsAwards: [
      { title: 'Best Project Award', description: 'Awarded for the Fashion Evo project in 2023.' },
      { title: 'Top Coder', description: 'Ranked in the top 5 at a hackathon.' }
    ],
    languages: ['English', 'Hindi', 'Marathi'],
    organizations: [
      { name: 'XYZ Developers Club', role: 'President' },
      { name: 'Tech Innovators', role: 'Member' }
    ]
  });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Uncomment and configure the following lines when integrating with an API
        // const token = localStorage.getItem('token');
        // if (!token) throw new Error('No token found');
        // const config = {
        //   headers: { Authorization: `Bearer ${token}` },
        // };
        // const { data } = await axios.get('/api/users/profile', config);
        // setProfile(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, [user]);

  const sections = [
    {
      id: 'basic-details', title: 'Basic Details', content: [
        { label: 'Name', value: profile.name },
        { label: 'Email', value: profile.email },
        { label: 'Contact Number', value: profile.contactNumber },
        { label: 'Bio', value: profile.bio },
        { label: 'Type', value: profile.type },
        { label: 'University', value: profile.universityName },
        { label: 'Account Created', value: new Date(profile.createdAt).toLocaleDateString() },
        { label: 'Last Updated', value: new Date(profile.updatedAt).toLocaleDateString() },
      ]
    },
    { id: 'education', title: 'Education', content: profile.education || [], isList: true, itemFormat: edu => `${edu.degree} at ${edu.institution}` },
    { id: 'experience', title: 'Experience', content: profile.experience || [], isList: true, itemFormat: exp => `${exp.role} at ${exp.company}` },
    { id: 'skills', title: 'Skills', content: profile.skills || [], isList: true },
    { id: 'areas-of-interest', title: 'Areas of Interest', content: profile.areasOfInterest || [], isList: true },
    { id: 'projects', title: 'Projects', content: profile.projects || [], isList: true, itemFormat: proj => `${proj.title}: ${proj.description}` },
    { id: 'certifications', title: 'Certifications', content: profile.certifications || [], isList: true, itemFormat: cert => `${cert.title} from ${cert.organization}` },
    { id: 'volunteer-experience', title: 'Volunteer Experience', content: profile.volunteerExperience || [], isList: true, itemFormat: vol => `${vol.role} at ${vol.organization}` },
    { id: 'honors-awards', title: 'Honors & Awards', content: profile.honorsAwards || [], isList: true, itemFormat: award => `${award.title}: ${award.description}` },
    { id: 'languages', title: 'Languages', content: profile.languages || [], isList: true },
    { id: 'organizations', title: 'Organizations', content: profile.organizations || [], isList: true, itemFormat: org => `${org.name} - ${org.role}` },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Your Profile</h1>
      <div className="flex flex-row container">
        <Sidebar profile={profile} />
        <div className="mx-auto ml-6 lg:w-[100%] flex flex-wrap space-y-4">
          {sections.map(section => (
            <ProfileSection
              key={section.id}
              id={section.id}
              title={section.title}
              content={section.content}
              isList={section.isList}
              itemFormat={section.itemFormat}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;