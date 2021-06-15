import { useRouter } from "next/router";
import { getUserFromCookie } from '/firebase/userCookies';

const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const userFromCookie = getUserFromCookie()

      // If there is no access user cookies we redirect to "/" page.
      if (!userFromCookie) {
        Router.replace("/");
        return null;
      }

      // If this is an userFromCookie we just render the component that was passed with all its props
      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;