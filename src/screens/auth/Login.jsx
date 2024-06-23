import { loginEndpoint } from "../../../spotify";

const Login = () => {
  return (
    <div className="bg-[#1f1f1f] h-screen w-screen flex items-center justify-center overflow-hidden flex-col">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="w-[30%]"
      />
      <a href={loginEndpoint} className="no-underline">
        <div className="w-[200px] py-4 text-center bg-[#fefefe] rounded-full text-[#1f1f1f] font-semibold mt-8">
          LOG IN
        </div>
      </a>
    </div>
  );
};

export default Login;
