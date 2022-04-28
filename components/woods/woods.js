// import { deleteDoc, doc } from 'firebase/firestore';
// import { useState } from 'react';
// import Button from '../Button';
// import { firestore } from '../firebase/client';

// const Woods = ({ id, nameWood, quality, price, component }) => {
//   const [fetching, setFetching] = useState(false);

//   const deleteWood = async (id, e) => {
//     e.stopPropagation();
//     setFetching(true);
//     const docRef = doc(firestore, 'woods', id);
//     await deleteDoc(docRef).catch((error) => {
//       alert(error);
//     });
//     setFetching(false);
//     alert(`Wood deleted: ${id}`);
//   };

//   return (
//     <>
//       <tr>
//         <td>{nameWood}</td>
//         <td>{quality}</td>
//         <td>{price}</td>
//         <td>{component}</td>
//         <td>
//           {fetching ? (
//             <button className="btn btn-square loading"></button>
//           ) : (
//             <button
//               className="btn btn-square btn-outline"
//               onClick={(e) => deleteWood(id, e)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           )}
//         </td>
//         <td>
//           <Button label="Editar" />
//         </td>
//       </tr>
//     </>
//   );
// };

// export default Woods;
