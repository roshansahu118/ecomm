import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/ProductContext";
import { FilterContextProvider } from "./context/FilterContext";
// import { Online, Offline, Detector } from "react-detect-offline";
import { CartProvider } from "./context/CartContext";
// import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <div>
            {/* <Detector
                render={({ Online }) => (
                    <div className="warning">
                        You are currently offline
                    </div>
                )}
            /> */}
            {/* <Auth0Provider
                domain="dev-mz0ybfg5560wfr30.us.auth0.com"
                clientId="0Jg13Ssjt5mploDqrG5Np0iaDSDwbqjZ"
                authorizationParams={{
                    redirect_uri: window.location.origin
                }}
            > */}
                <AppProvider>
                    <FilterContextProvider>
                        <CartProvider>
                            <App />
                        </CartProvider>
                    </FilterContextProvider>
                </AppProvider>

                {/* <Offline>Please check your connection Your are offline (surprise!)</Offline> */}
            {/* </Auth0Provider> */}
        </div>

    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
