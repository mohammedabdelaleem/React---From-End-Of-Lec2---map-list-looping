import { useHistory } from "react-router-dom";

export default function ContactUS(props) {
  const history = useHistory();

  const redirtToHome = () => {
    // redirect using props
    // props.history.push("/");

    // redirect using react hook : useHistory
    history.push("/"); 
  };

  return (
    <div>
      <h1>Hello From ContactUS</h1>

      <button className="btn btn-primary" onClick={redirtToHome}>
        Login
      </button>
    </div>
  );
}
