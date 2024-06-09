// import React from "react";
// import AuthService from "../services/auth.service";

// const Profile = () => {
//   const currentUser = AuthService.getCurrentUser();

//   return (
//     <div className="container">
//       <header className="jumbotron">
//         <h3>
//           <strong>{currentUser.username}</strong> Profile
//         </h3>
//       </header>
//       <p>
//         <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
//         {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
//       </p>
//       <p>
//         <strong>Id:</strong> {currentUser.id}
//       </p>
//       <p>
//         <strong>Email:</strong> {currentUser.email}
//       </p>
//       <strong>Authorities:</strong>
//       <ul>
//         {currentUser.roles }
//       </ul>
//     </div>
//   );
// };

// export default Profile;
import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <header className="card-header bg-primary text-white">
              <h3 className="card-title">
                <strong>{currentUser.username}</strong> Profile
              </h3>
            </header>
            <div className="card-body">
              <p className="card-text">
                <strong>Token:</strong>{" "}
                {currentUser.accessToken.substring(0, 20)} ...{" "}
                {currentUser.accessToken.substr(
                  currentUser.accessToken.length - 20
                )}
              </p>
              <p className="card-text">
                <strong>Id:</strong> {currentUser.id}
              </p>
              <p className="card-text">
                <strong>Email:</strong> {currentUser.email}
              </p>
              <strong>Authorities:</strong>
              <ul className="list-group mt-2">
                {currentUser.roles}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
