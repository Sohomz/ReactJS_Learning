import { useRouteError } from "react-router";

function ErrorPage() {
  const err = useRouteError();
  return (
    <div>
      ErrorPage
      <h1>OOPs!!!!! </h1>
      <h2>{err.status}</h2>
    </div>
  );
}

export default ErrorPage;
