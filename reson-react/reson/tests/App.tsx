// import { useAccount, useIsAuthenticated } from "jazz-tools/react";
// import { Form } from "./Form.tsx";
// import { JazzAccount } from "./schema.ts";



// function App() {
//   const { me } = useAccount(JazzAccount, {
//     resolve: { profile: true, root: true },
//   });

//   return (
//     <>
      
//       <main className="max-w-2xl mx-auto px-3 mt-16 flex flex-col gap-8">
        

//         <div className="text-center">
//           <h1>
//             Welcome{me?.profile.nickname ? <>, {me?.profile.nickname}</> : ""}
//             !
//           </h1>
//         </div>

//         <Form />

//         <p className="text-center">
//           Edit the form above,{" "}
//           <button
//             type="button"
//             onClick={() => window.location.reload()}
//             className="font-semibold underline"
//           >
//             refresh
//           </button>{" "}
//           this page, and see your changes persist.
//         </p>

//         <p className="text-center">
//           Edit <code className="font-semibold">schema.ts</code> to add more
//           fields.
//         </p>

//         <p className="text-center my-16">
//           Go to{" "}
//           <a className="font-semibold underline" href="https://jazz.tools/docs">
//             jazz.tools/docs
//           </a>{" "}
//           for our docs.
//         </p>
//       </main>
//     </>
//   );
// }

// export default App;
