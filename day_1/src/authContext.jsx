import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        role: action.payload.role
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        role: null,
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

      if (token) {
        try {
          // Make an API call to verify the token validity
          // For example:
          const isValidToken = await sdk.verifyToken(token);

          if (isValidToken) {
            // Token is valid, update the state accordingly
            const user = await sdk.getUserInfo(token);
            const role = localStorage.getItem("role");

            dispatch({
              type: "LOGIN",
              payload: {
                user,
                role,
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
