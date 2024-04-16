import { Button } from "antd";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen   justify-center p-24 gap-10">
      <Link href={'about'}><Button>about</Button></Link>
      <Link href={'contact'}><Button>contact</Button></Link>
      <Link href={'profile'}><Button>profile</Button></Link>
      <Link href={'adress'}><Button>profile-adress</Button></Link>
      <Link href={'change-password'}><Button>Change-password</Button></Link>
      <Link href={'users'}><Button>users</Button></Link>
      <Link href={'users/2121'}><Button>user</Button></Link>
      <Link href={'users/111/location/11111'}><Button>location</Button></Link>
    </div>
  );
}
 