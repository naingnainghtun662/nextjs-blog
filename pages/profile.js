import Image from "next/image";
import Head from "next/head";
const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div>
        <Image
          src="/images/profile.jpg"
          alt="Naing Naing Htun"
          width={200}
          height={200}
        />
      </div>
    </>
  );
};

export default Profile;
