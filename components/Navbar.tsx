export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <ul className="flex justify-between">
        <li>WU Clone</li>
        <li><a href="/send">Send</a></li>
        <li><a href="/admin">Admin</a></li>
      </ul>
    </nav>
  );
}
