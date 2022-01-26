import { ConfigIcon, HomeIcon, LogoutIcon, NotifyIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

const SideMenu = () => {
  return (
    <aside className="flex flex-col">
      <div
        className={`
      flex flex-col items-center justify-center
      bg-gradient-to-r from-indigo-500 to-purple-800
      h-20 w-20
      `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Inicio" icon={HomeIcon} />
        <MenuItem url="/config" text="Ajustes" icon={ConfigIcon} />
        <MenuItem url="/notifications" text="Notificações" icon={NotifyIcon} />
      </ul>

      <ul>
        <MenuItem
          text="Sair"
          icon={LogoutIcon}
          onClick={() => console.log("Logout")}
          className="text-red-900 hover:bg-red-400 hover:text-white"
        />
      </ul>
    </aside>
  );
};

export default SideMenu;
