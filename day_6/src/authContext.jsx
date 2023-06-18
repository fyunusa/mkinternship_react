import React, { useReducer, useEffect } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  // console.log("i am from reducer")
  console.log(state)
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};


let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "Logout",
    });
    window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      // console.log('token coming below')
      // console.log(token)

      if (token) {
        try {
          const isValidToken = await sdk.check(role);

          if (isValidToken) {
            // Token is valid, update the state accordingly
            const role = localStorage.getItem("role");

            dispatch({
              type: "LOGIN",
              payload: {
                role,
                token
              },
            });
          } else {
            // Token is invalid/expired, perform logout
            dispatch({
              type: "LOGOUT",
            });
            window.location.href = `/${localStorage.getItem("role")}/login`;
          }
        } catch (error) {
          console.error("Error while verifying token:", error);
        }
      }
    };

    checkToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
