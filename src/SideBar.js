//mport FolderIcon from "@mui/icons-material/Folder";
//import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IconButton } from "@material-ui/core";
export default function SideBar() {
  return (
    <>
      <ul
        class="navbar-nav bg-gradient-info sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="#!"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <EmojiEmotionsIcon />
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item active">
          <a class="nav-link" href="index.html">
            <DashboardIcon />
            <span>Dashboard</span>
          </a>
        </li>

        <hr class="sidebar-divider" />

        <div class="sidebar-heading">Profile</div>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#!">
            <PersonIcon />
            <span>Profiles</span>
            <IconButton className="arrowIcon">
              <ChevronRightIcon />
            </IconButton>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#!">
            <PersonAddIcon />
            <span>Create Profile</span>
            <IconButton className="arrowIcon">
              <ChevronRightIcon />
            </IconButton>
          </a>
        </li>

        <hr class="sidebar-divider" />

        <div class="sidebar-heading">Users</div>

        <li class="nav-item">
          <a class="nav-link " href="#!">
            <PeopleAltIcon />
            <span>Users</span>
            {/* <ArrowForwardIosIcon /> */}
            <IconButton className="arrowIcon">
              <ChevronRightIcon />
            </IconButton>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#!">
            <GroupAddIcon />
            <span>Create User</span>
            <IconButton className="arrowIcon">
              <ChevronRightIcon />
            </IconButton>
          </a>
        </li>

        <hr class="sidebar-divider d-none d-md-block" />

        {/* <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div> */}

        <div class="sidebar-card d-none d-lg-flex">
          <img
            class="sidebar-card-illustration mb-2"
            src="https://media.istockphoto.com/photos/cartoon-rocket-space-ship-picture-id491615068?b=1&k=20&m=491615068&s=170667a&w=0&h=85SFPdNHU5wxneb16YM2ipXvuBKokr2Jlmfn-r78OF4="
            alt="..."
          />
          <p class="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            class="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </>
  );
}
